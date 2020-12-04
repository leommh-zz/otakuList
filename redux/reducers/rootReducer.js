import { combineReducers } from "redux";

/** reducers */
import listReducer from "./listReducer";

/** combinando os reducers */
const appReducer = combineReducers({
  listReducer,
});

export default appReducer;