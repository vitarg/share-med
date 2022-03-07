import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./thunks";
import { Category } from "../../data/types/category";

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
