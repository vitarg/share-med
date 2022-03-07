import { RootState } from "../configureStore";

export const token = (state: RootState) => state.application.token;
export const signingUp = (state: RootState) => state.application.signingUp;
export const signingIn = (state: RootState) => state.application.signingIn;
export const error = (state: RootState) => state.application.error;

export default { token, signingUp, signingIn, error };
