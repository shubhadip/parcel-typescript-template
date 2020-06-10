import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import Routes from './router/routerlinks';
import rootReducer from './reducers';
import RouteMap from './router/index';
import { filterData } from './utils/filter';
const app = express();
const PORT = process.env.PORT || 4000;
import MobileDetect from 'mobile-detect';
import manifestData from '../dist/parcel-manifest.json';
// tbd: need to move this to nginx level
// app.get('*.js', (req, res, next) => {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });
app.use(express.static('dist'));

// temp favicon fix
app.get('/favicon.ico', (req, res) => res.status(204));
const js = manifestData['src/index.tsx'];
const css = manifestData['src/scss/main.scss'];

app.get('*', (req, res, next) => {
  const context = {};
  const md = new MobileDetect(req.headers['user-agent']);
  let preloadedState = {
    common: {
      isMobile: !!md.mobile(),
      isBot: md.is('bot')
    }
  };
  let promise;
  const currentRoute = Routes.find(route => matchPath(req.url, route)) || {
    routeName: 'pagenotfound'
  };
  try {
    promise = currentRoute.loadData
      ? currentRoute.loadData(req.url)
      : Promise.resolve({});

    promise
      .then((response: any) => {
        const cleanedData = filterData(currentRoute.routeName, response) || {};
        preloadedState = { ...preloadedState, ...cleanedData };
        preloadedState = { ...preloadedState };
        const store = createStore(rootReducer, preloadedState);

        const content = ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
              <div>
                <RouteMap />
              </div>
            </StaticRouter>
          </Provider>
        );
        const finalState = store.getState();
        promise = null;
        return res.send(`
      <!DOCTYPE html>
      <html lang='en'>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
          <title>Parcel App</title>
          <link href="${css}" rel="stylesheet"/>
            <link rel='manifest' href='manifest.json' ></link>
            <meta name='apple-mobile-web-app-capable' content="yes">
            <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
            <meta name="apple-mobile-web-app-title" content="SickBox"></meta>
            <meta name="theme-color" content="#e00000"/>

        </head>
        <body>
          <div id="app">${content}</div>
          <div id="portal-root"></div>

<script>
window.__PRELOADED_STATE__ = ${(JSON.stringify(finalState) as any).replace(
    /</g,
    '\\u003c'
  )}
</script>
<script type="text/javascript" src="${js}"  defer></script>
          <script type="text/javascript" defer>
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, function(err) {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          </script>
        </body>
      </html>
    `);
      })
      .catch(e => {
        next(e);
      });
  } catch (e) {
    next(e);
  }
});


app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
