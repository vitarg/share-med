import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./features/application";
import medicationsReducer from "./features/medications";

export const store = configureStore({
  reducer: {
    application: applicationReducer,
    medications: medicationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;