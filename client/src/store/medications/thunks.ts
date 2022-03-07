import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedications = createAsyncThunk(
  "selectors/get",
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
  "selectors/add",
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
  "selectors/remove",
  async (payload: RemoveMedicationProps, { rejectWithValue }) => {
    const response = await axios.delete(`/medications/${payload.id}`);

    if (!response.data.ok) {
      rejectWithValue(response.data.error);
    }

    return response.data;
  }
);