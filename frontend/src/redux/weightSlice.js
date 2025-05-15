import { createSlice } from "@reduxjs/toolkit";

const weightSlice = createSlice({
  name: "weight",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchWeight: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    loadingWeight: (state) => {
      state.loading = true;
      state.error = null;
    },
    errorWeight: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeight, loadingWeight, errorWeight } = weightSlice.actions;
export default weightSlice.reducer;
