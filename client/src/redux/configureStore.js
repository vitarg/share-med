import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import medications from "./features/medications";
import categories from "./features/categories";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({ medications, categories }),
  composeWithDevTools(applyMiddleware(thunk))
);
