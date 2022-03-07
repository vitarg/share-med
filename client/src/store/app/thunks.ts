import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
