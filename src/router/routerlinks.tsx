import Home from '../components/home/Home';
import About from '../components/about/About';
import PageNotFound from '../components/pagenotfound/PageNotFound';
import { aboutLoadData } from '../actions/index';

export default [
  {
    component: About,
    routeName: 'about',
    path: '/about',
    loadData: aboutLoadData
  },
  {
    component: Home,
    routeName: 'home',
    path: '/',
    exact: true
  },
  {
    component: PageNotFound,
    routeName: 'pagenotfound',
    path: '*'
  }
];
