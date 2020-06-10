import React from 'react';
import { renderRoutes } from 'react-router-config';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Routes from './routerlinks';

class RouteMap extends React.Component<any, any> {
  componentDidMount() {}

  render() {
    return <main>{renderRoutes(Routes as any)}</main>;
  }
}

export default hot(module)(connect(null, null)(RouteMap));
