import { RootState } from "../configureStore";

export const selectors = (state: RootState) => state.categories.categories;
export const loading = (state: RootState) => state.categories.loading;
export const error = (state: RootState) => state.categories.error;

export default { categories: selectors, loading, error };
