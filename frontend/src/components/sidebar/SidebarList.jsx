import React from "react";
import { LayoutDashboard, BarChart, PlusCircle, Truck } from "lucide-react";

function SidebarList({ setActiveSection, activeSection }) {
  const sections = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      label: "Weight Progress",
      key: "weight progress",
      icon: <BarChart size={20} />,
    },
    { label: "Add Weight", key: "addWeight", icon: <PlusCircle size={20} /> },
    { label: "Shipment History", key: "shipment", icon: <Truck size={20} /> },
  ];

  return (
    <ul className="w-full px-4 space-y-2">
      {sections.map((section) => (
        <li key={section.key}>
          <button
            onClick={() => setActiveSection(section.key)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 
              ${
                activeSection === section.key
                  ? "bg-[#8acbce] text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            <span>{section.icon}</span>
            {section.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SidebarList;
