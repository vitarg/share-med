import { RootState } from "../configureStore";

export const selectors = (state: RootState) => state.medications.medications;
export const loading = (state: RootState) => state.medications.loading;
export const error = (state: RootState) => state.medications.error;

export default { medications: selectors, loading, error };
