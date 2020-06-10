import { DUMMY_LIST } from '../actions/types';

const reducer = (
  state = {
    data: []
  },
  action: {
    type: string;
    payload: any;
  }
) => {
  switch (action.type) {
    case DUMMY_LIST:
      const dummy = (action.payload && action.payload) || [];
      return { ...state, data: dummy };
    default:
      return { ...state };
  }
};

export default reducer;
