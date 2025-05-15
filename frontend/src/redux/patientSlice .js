import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    name: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchPatientStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPatientSuccess: (state, action) => {
      state.loading = false;
      state.name = action.payload;
    },
    fetchPatientFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPatientStart, fetchPatientSuccess, fetchPatientFailure } =
  patientSlice.actions;
export default patientSlice.reducer;
