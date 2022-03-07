import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Category {
  _id?: string;
  name: string;
}

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: SerializedError | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const getCategories = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    const response = await axios.get("/categories");

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.categories = action.payload;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;
