import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import './home.scss';

const Home: React.FC = () => (
  <div className="home">
    <img src="https://i.picsum.photos/id/532/786/512.jpg" />
    <Link to='/about'>About Page</Link>
  </div>
);

export default hot(module)(Home);
