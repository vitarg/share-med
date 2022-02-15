import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./features/application";
import medicationsReducer from "./features/medications";
import categoriesReducer from "./features/categories";
import requestsReducer from "./features/requests";

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
