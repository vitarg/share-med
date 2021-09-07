import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import medications from "./features/application";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({ medications }),
  composeWithDevTools(applyMiddleware(thunk))
);
