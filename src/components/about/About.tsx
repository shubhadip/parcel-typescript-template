import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import './about.scss';
import { DUMMY_LIST } from '../../actions/types';
interface Aprops {
  isMobileDevice?: boolean;
  data?: any;
  route: any;
  dispatch: any;
}

class About extends React.Component<Aprops, any> {
  handleClick = () => {};

  componentDidMount() {
    this.props.route.loadData()
      .then((response) => {
        this.props.dispatch({
          type: DUMMY_LIST,
          payload: response.data
        });
      });
  }

  render() {
    return (
      <div className="about">
        <p> I am About Component</p>
        {
          this.props.data.map((elem) => (
            <div key={elem.title} className='list-item'>
              {elem.title}
            </div>
          ))
        }
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    data: state.dummy && state.dummy.data
  };
}
export default hot(module)(connect(mapStateToProps, null)(About));
