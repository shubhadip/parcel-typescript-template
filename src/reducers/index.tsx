import { combineReducers } from 'redux';
import commonReducer from './common_reducer';
import dummyReducer from './dummy_reducer';

const rootReducer = combineReducers({
  common: commonReducer,
  dummy: dummyReducer
});

export default rootReducer;
