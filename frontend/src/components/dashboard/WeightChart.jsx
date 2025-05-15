import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function WeightChart({ weightData, loading, error }) {
  if (loading) {
    return <div className="text-center">Loading data...</div>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (weightData?.length === 0) {
    return <p>No weight data available.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Weight Progress
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={weightData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis unit="kg" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="#8acbce"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeightChart;
