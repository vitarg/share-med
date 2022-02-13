import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";

export interface ApplicationState {
  signingUp: boolean;
  signingIn: boolean;
  error: SerializedError | null;
  token: string | null;
}

const initialState: ApplicationState = {
  signingUp: false,
  signingIn: false,
  error: null,
  token: localStorage.getItem("token"),
};

interface createAdminPayload {
  name: string;
  login: string;
  password: string;
}

export const createAdmin = createAsyncThunk(
  "application/sign-up",
  async (payload: createAdminPayload, { rejectWithValue }) => {
    const response = await axios.post("/admins", {
      ...payload,
    });

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }
    return response.data;
  }
);

interface signInPayload {
  login: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "application/sign-in",
  async (payload: signInPayload, { rejectWithValue }) => {
    const response = await axios.post("/admins/login", { ...payload });

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.setItem("token", "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createAdmin.pending, (state) => {
      state.signingUp = true;
      state.error = null;
    });
    builder.addCase(createAdmin.rejected, (state, action) => {
      state.signingUp = false;
      state.error = action.error;
    });
    builder.addCase(createAdmin.fulfilled, (state) => {
      state.signingUp = false;
      state.error = null;
    });

    builder.addCase(signIn.pending, (state) => {
      state.signingIn = true;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.signingIn = false;
      state.error = action.error;
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.signingIn = false;
      state.error = null;
    });
  },
});

export const { logout } = applicationSlice.actions;

export default applicationSlice.reducer;
