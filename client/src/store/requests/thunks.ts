import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
