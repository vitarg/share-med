import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import medications from "./features/medications";
import categories from "./features/categories";
import application from './features/application';
import { composeWithDevTools } from "redux-devtools-extension";
import requests from './features/requests';

export const store = createStore(
<<<<<<< HEAD
  combineReducers({ requests, medications, categories }),
=======
  combineReducers({ medications, categories, application }),
>>>>>>> 89bed83185bb530c4904045c76e9efb4fdf2314b
  composeWithDevTools(applyMiddleware(thunk))
);

