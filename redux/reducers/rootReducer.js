import { combineReducers } from "redux";

/** reducers */
import listReducer from "./listReducer";
import animeReducer from "./animeReducer";

/** combinando os reducers */
const appReducer = combineReducers({
  listReducer,
  animeReducer,
});

export default appReducer;
