import { GET_ANIME } from "../types";

const INITIAL_STATE = {
  data: null,
};

const animeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ANIME: {
      const { data } = action.payload;
      return {
        ...state,
        data
      }
    }
    default:
      return state;
  }
};

export default animeReducer;
