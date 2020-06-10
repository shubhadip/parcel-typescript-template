import * as React from 'react';
import './pageNotFound.scss';
class PageNotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <div>
          <h1 className="page-header">404</h1>
          <p className="page-title">Page Not Found!</p>

          <a href="/" className="pg-home">
            {' '}
            Go To Homepage
          </a>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
