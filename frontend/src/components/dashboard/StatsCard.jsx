import React from "react";

function StatsCard({ label, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
      <p className="text-gray-500">{label}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}

export default StatsCard;
