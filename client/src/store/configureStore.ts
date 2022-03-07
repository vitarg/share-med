import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./slices/application";
import medicationsReducer from "./slices/medications";
import categoriesReducer from "./slices/categories";
import requestsReducer from "./slices/requests";

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
