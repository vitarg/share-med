import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import medications from "./features/medications";
import categories from "./features/categories";
import application from './features/application';
import { composeWithDevTools } from "redux-devtools-extension";
import requests from './features/requests';

export const store = createStore(
  combineReducers({ requests, medications, categories, application }),

  composeWithDevTools(applyMiddleware(thunk))
);

