import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import medications from "./features/medications";
import categories from "./features/categories";
import application from "./features/application";
import requests from "./features/requests";
import { composeWithDevTools } from "redux-devtools-extension";


export const store = createStore(
  combineReducers({ medications, categories, application, requests }),
  composeWithDevTools(applyMiddleware(thunk))
);
