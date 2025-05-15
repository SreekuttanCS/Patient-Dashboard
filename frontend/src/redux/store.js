import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./sectionSlice.js";
import weightReducer from "./weightSlice.js";
import shipmentStatusReducer from "./shipmentStatusSlice .js";
import patientReducer from "./patientSlice .js";

const store = configureStore({
  reducer: {
    section: sectionReducer,
    weight: weightReducer,
    shipmentStatus: shipmentStatusReducer,
    patient: patientReducer,
  },
});

export default store;
