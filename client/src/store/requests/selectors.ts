import { RootState } from "../configureStore";

export const requests = (state: RootState) => state.requests.requests;
export const loading = (state: RootState) => state.requests.loading;
export const error = (state: RootState) => state.requests.error;

export default { requests, loading, error };
