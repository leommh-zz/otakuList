import { GET_ANIME } from "../types";

const INITIAL_STATE = {
  data: null,
  included: null,
};

const animeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ANIME: {
      const { data, included } = action.payload;
      return {
        ...state,
        data,
        included: included || null,
      }
    }
    default:
      return state;
  }
};

export default animeReducer;
