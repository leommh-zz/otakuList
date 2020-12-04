import { GET_LIST } from "../types";

const INITIAL_STATE = {
  list: [],
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return state;
    default:
      return state;
  }
};

export default counterReducer;
