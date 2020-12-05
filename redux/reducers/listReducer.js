import { GET_LIST } from "../types";

const INITIAL_STATE = {
  list: [],
  count: 0,
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST: {
      const { data, meta: { count } } = action.payload;
      return {
        ...state,
        list: data,
        count  
      }
    }
    default:
      return state;
  }
};

export default listReducer;
