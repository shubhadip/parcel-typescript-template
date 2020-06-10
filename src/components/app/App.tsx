import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import '../../scss/main.scss'; // this has to be on the top
import RouteMap from '../../router';

interface AProps {
  isMobileDevice?: boolean;
}

class App extends React.Component<AProps, any> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <RouteMap />
        </Provider>
      </div>
    );
  }
}

export default App;
