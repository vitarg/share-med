import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Request {
  _id: string;
  name: string;
  tel: string;
  email: string;
  message: string;
  medicationId: string;
  isAccept: boolean;
}

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

interface AddRequestProps {
  medicationId: string;
  name: string;
  tel: string;
  email: string;
  message: string;
}

export const addRequest = createAsyncThunk(
  "requests/add",
  async (payload: AddRequestProps, { rejectWithValue }) => {
    const response = await axios.post("/requests", {
      payload,
    });

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

interface GetRequestsProps {
  id: string;
}

export const getRequests = createAsyncThunk(
  "requests/get",
  async (payload: GetRequestsProps, { rejectWithValue }) => {
    const response = await axios.get(`/requests/${payload.id}`);

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

interface AcceptRequestProps {
  id: string;
  medicationId: string;
}

export const acceptRequest = createAsyncThunk(
  "requests/accept",
  async (payload: AcceptRequestProps, { rejectWithValue }) => {
    const response = await axios.patch(`/requests/${payload.id}/accept`);

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

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
    builder.addCase(acceptRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
  },
});

export const {} = requestsSlice.actions;

export default requestsSlice.reducer;
