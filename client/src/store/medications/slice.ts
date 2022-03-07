import { createSlice } from "@reduxjs/toolkit";
import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { addMedication, getMedications, removeMedication } from "./thunks";
import { Medication } from "../../data/types/medication";

interface MedicationsState {
  medications: Medication[];
  loading: boolean;
  error: SerializedError | null;
}

const initialState: MedicationsState = {
  medications: [],
  loading: false,
  error: null,
};

const medicationsSlice = createSlice({
  name: "medications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMedications.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMedications.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getMedications.fulfilled, (state, action) => {
      state.medications = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(addMedication.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addMedication.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(addMedication.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.medications.push(action.payload);
    });

    builder.addCase(removeMedication.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(removeMedication.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(removeMedication.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.medications.find((item) => action.payload === item._id);
    });
  },
});

export const {} = medicationsSlice.actions;

export default medicationsSlice.reducer;
