import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./app/slice";
import medicationsReducer from "./medications/slice";
import categoriesReducer from "./categories/slice";
import requestsReducer from "./requests/slice";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    medications: medicationsReducer,
    categories: categoriesReducer,
    requests: requestsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
