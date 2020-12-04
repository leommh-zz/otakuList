import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

// export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

// create a makeStore function
const makeStore = (context) =>
  createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export const wrapper = createWrapper(makeStore, { debug: true });
