import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { errorWeight, fetchWeight } from "../../redux/weightSlice";
import fetchPatientInfo from "../api/fetchPatientInfo";
import fetchShipmentStatus from "../api/fetchShipmentStatus";
import fetchWeightData from "../api/fetchWeightData";
import {
  fetchShipmentStatusFailure,
  fetchShipmentStatusStart,
  fetchShipmentStatusSuccess,
} from "../../redux/shipmentStatusSlice ";
import {
  fetchPatientFailure,
  fetchPatientStart,
  fetchPatientSuccess,
} from "../../redux/patientSlice ";
import WeightChart from "../dashboard/WeightChart";
import StatsCard from "../dashboard/StatsCard";
import WelcomeCard from "../dashboard/WelcomeCard";

function Dashboard() {
  const dispatch = useDispatch();

  const {
    data: weightData = [],
    loading: weightLoading,
    error: weightError,
  } = useSelector((state) => state.weight || {});
  const {
    status: shipmentStatus = "N/A",
    loading: shipmentStatusLoading,
    error: shipmentStatusError,
  } = useSelector((state) => state.shipmentStatus || {});
  const {
    name: patientName = "N/A",
    loading: patientLoading,
    error: patientError,
  } = useSelector((state) => state.patient || {}); // Ensure state is an object

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const weightResponse = await fetchWeightData(token);
        dispatch(fetchWeight(weightResponse));
      } catch (err) {
        dispatch(errorWeight(err.message));
      }

      try {
        dispatch(fetchShipmentStatusStart());
        const shipmentResponse = await fetchShipmentStatus(token);
        dispatch(fetchShipmentStatusSuccess(shipmentResponse.status));
      } catch (err) {
        dispatch(fetchShipmentStatusFailure(err.message));
      }

      try {
        dispatch(fetchPatientStart());
        const patientResponse = await fetchPatientInfo(token);
        dispatch(fetchPatientSuccess(patientResponse.name));
      } catch (err) {
        dispatch(fetchPatientFailure(err.message));
      }
    };

    fetchData();
  }, []);

  const summary = {
    weight: weightData?.[0]?.weight || "N/A",
    lastUpdated: weightData?.[weightData.length - 1]?.date || "N/A",
    shipmentStatus,
    patientName,
  };

  return (
    <div className="space-y-6">
      <WelcomeCard summary={summary} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Current Weight" value={`${summary.weight} kg`} />
        <StatsCard label="Shipment Status" value={summary.shipmentStatus} />
        <StatsCard label="Patient" value={summary.patientName} />
      </div>
      <WeightChart
        weightData={weightData}
        loading={weightLoading || patientLoading || shipmentStatusLoading}
        error={weightError || patientError || shipmentStatusError}
      />
    </div>
  );
}

export default Dashboard;
