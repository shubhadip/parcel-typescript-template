import * as React from 'react';
import Home from '../components/home/Home';

const About = React.lazy(() => import('./../components/about/About'));

function AboutComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <About />
      </React.Suspense>
    </div>
  );
}

export default [
  {
    component: Home,
    routeName: 'home',
    path: '/',
    exact: true
  },
  {
    component: AboutComponent,
    routeName: 'about',
    path: '/about'
  },
];
