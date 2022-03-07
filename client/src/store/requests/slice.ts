import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { createSlice } from "@reduxjs/toolkit";
import { acceptRequest, addRequest, getRequests } from "./thunks";
import { Request } from "../../data/types/request";

interface RequestsState {
  requests: Request[];
  loading: boolean;
  error: SerializedError | null;
}

const initialState: RequestsState = {
  requests: [],
  loading: false,
  error: null,
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(addRequest.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getRequests.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRequests.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getRequests.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.requests = action.payload;
    });

    builder.addCase(acceptRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(acceptRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(acceptRequest.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export const {} = requestsSlice.actions;

export default requestsSlice.reducer;
