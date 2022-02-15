import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";
import { Category } from "./categories";

export interface Medication {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: Category;
  img: string;
  hasRecipe: boolean;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
}

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

export const getMedications = createAsyncThunk(
  "medications/get",
  async (_, { rejectWithValue }) => {
    const response = await axios.get("/medications");

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

interface AddMedicationProps {
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
  expiryDate: string;
  hasRecipe: boolean;
}

export const addMedication = createAsyncThunk(
  "medications/add",
  async (payload: AddMedicationProps, { rejectWithValue }) => {
    const response = await axios.post("/medications", {
      ...payload,
    });

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

interface RemoveMedicationProps {
  id: string;
}

export const removeMedication = createAsyncThunk(
  "medications/remove",
  async (payload: RemoveMedicationProps, { rejectWithValue }) => {
    const response = await axios.delete(`/medications/${payload.id}`);

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);

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
