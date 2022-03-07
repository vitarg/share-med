import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "selectors/fetch",
  async (_, { rejectWithValue }) => {
    const response = await axios.get("/categories");

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);