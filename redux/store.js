import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
