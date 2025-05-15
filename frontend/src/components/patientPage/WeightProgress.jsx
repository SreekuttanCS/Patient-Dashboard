import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import axios from "axios";
import {
  errorWeight,
  fetchWeight,
  loadingWeight,
} from "../../redux/weightSlice";

const WeightProgress = () => {
  const dispatch = useDispatch();
  const {
    data: weightData,
    loading,
    error,
  } = useSelector((state) => state.weight);

  useEffect(() => {
    const fetchWeightData = async (token) => {
      const userId = localStorage.getItem("userId");
      try {
        dispatch(loadingWeight());
        const response = await axios.get(
          `http://localhost:5000/api/weights/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(fetchWeight(response.data));
      } catch (err) {
        console.error(err);
        dispatch(errorWeight("Failed to fetch weight data"));
      }
    };

    const token = localStorage.getItem("token");
    if (token) {
      fetchWeightData(token);
    }
  }, [dispatch]);

  // Manually format the date here (e.g., "MMM dd, yyyy")
  const formattedData = weightData.map((entry) => {
    const dateObj = new Date(entry.date);
    const formattedDate = `${dateObj.toLocaleString("default", {
      month: "short",
    })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    return {
      ...entry,
      date: formattedDate,
    };
  });

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-600 mb-2">
            Weight Progress
          </h1>
          <p className="text-lg text-gray-600">
            Track your weight journey and progress
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📈 Progress Chart
          </h2>

          {loading ? (
            <div className="flex justify-center items-center space-x-2">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-indigo-600"></div>
              <p className="text-gray-500">Loading chart...</p>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : weightData.length === 0 ? (
            <p className="text-gray-500 text-center">
              No weight records found.
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis unit="kg" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#4C9BFD"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            📅 Recent Weight Entries
          </h2>

          {weightData?.length === 0 ? (
            <p className="text-gray-500 text-center">No weight entries yet.</p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {weightData
                .slice()
                .reverse()
                .map((entry, index) => (
                  <li
                    key={index}
                    className="py-4 flex justify-between items-center text-gray-700"
                  >
                    <span className="text-lg">{entry.date}</span>
                    <span className="text-xl font-semibold text-indigo-600">
                      {entry.weight} kg
                    </span>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeightProgress;
