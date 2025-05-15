import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShipmentStatusFailure,
  fetchShipmentStatusStart,
  fetchShipmentStatusSuccess,
} from "../../redux/shipmentStatusSlice ";
import fetchShipmentStatus from "../api/fetchShipmentStatus";

const ShipmentHistory = () => {
  const dispatch = useDispatch();
  const {
    shipments = [],
    loading,
    error,
  } = useSelector((state) => state.shipmentStatus || {});

  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        dispatch(fetchShipmentStatusStart());
        const shipmentsData = await fetchShipmentStatus(token);

        if (shipmentsData) {
          dispatch(fetchShipmentStatusSuccess({ shipments: shipmentsData }));
        } else {
          dispatch(fetchShipmentStatusFailure("No shipments found"));
        }
      } catch (err) {
        dispatch(fetchShipmentStatusFailure("Failed to load shipments"));
      }
    };

    if (token) {
      fetchShipments();
    } else {
      dispatch(fetchShipmentStatusFailure("No token available"));
    }
  }, [dispatch, token]);

  // Filtering shipments based on search term
  const filteredShipments = shipments.filter(
    (shipment) =>
      shipment.medication.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.trackingNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        📦 Shipment History
      </h2>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by medication or tracking number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 w-full"
        />
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        {loading ? (
          <p className="text-gray-500">Loading shipments...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : filteredShipments.length === 0 ? (
          <p className="text-gray-500">No shipment records found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm text-left text-gray-700">
              <thead className="bg-[#8acbce] text-white">
                <tr>
                  <th className="px-4 py-3">Medication</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Tracking Number</th>
                  <th className="px-4 py-3">Expected Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredShipments.map((shipment, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">{shipment.medication}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          shipment.status === "delivered"
                            ? "bg-green-100 text-green-600"
                            : shipment.status === "shipped"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {shipment.trackingNumber || "N/A"}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(shipment.expectedDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipmentHistory;
