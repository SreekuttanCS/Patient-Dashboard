import { createSlice } from "@reduxjs/toolkit";

const shipmentStatusSlice = createSlice({
  name: "shipmentStatus",
  initialState: {
    shipments: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchShipmentStatusStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchShipmentStatusSuccess: (state, action) => {
      state.loading = false;
      state.shipments = action.payload.shipments;
    },
    fetchShipmentStatusFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Error message in case of failure
    },
  },
});

export const {
  fetchShipmentStatusStart,
  fetchShipmentStatusSuccess,
  fetchShipmentStatusFailure,
} = shipmentStatusSlice.actions;

export default shipmentStatusSlice.reducer;
