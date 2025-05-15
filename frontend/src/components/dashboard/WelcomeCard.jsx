import React from "react";

function WelcomeCard({ summary }) {
  return (
    <div className="bg-[#8acbce] text-white rounded-2xl p-6 shadow">
      <h2 className="text-2xl font-semibold">
        Welcome back, {summary.patientName} 👋
      </h2>
      <p className="mt-2">Here’s your latest health and shipment update.</p>
    </div>
  );
}

export default WelcomeCard;
