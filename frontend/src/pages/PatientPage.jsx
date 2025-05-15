import React, { useState } from "react";
import Sidebar from "../components/patientPage/SideBar";
import Dashboard from "../components/patientPage/Dashboard";
import WeightProgress from "../components/patientPage/WeightProgress";
import AddWeight from "../components/patientPage/AddWeight";
import ShipmentHistory from "../components/patientPage/ShipmentHistory";

function PatientPage() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "weight progress":
        return <WeightProgress />;
      case "addWeight":
        return <AddWeight />;
      case "shipment":
        return <ShipmentHistory />;
      default:
        return <Dashboard />;
    }
  };
  console.log(activeSection);

  return (
    <div className="patient-page flex">
      <Sidebar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div className="content flex-1 p-4">{renderSection()}</div>
    </div>
  );
}

export default PatientPage;
