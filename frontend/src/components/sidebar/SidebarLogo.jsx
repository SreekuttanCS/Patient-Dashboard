import React from "react";
import logo from "../../assets/logo.png";

const SidebarLogo = () => {
  return (
    <div className="flex items-center space-x-4 p-4 hover:bg-gray-100 transition duration-300 rounded-lg cursor-pointer">
      <img
        src={logo}
        alt="ACME Logo"
        className="h-12 w-12 rounded-md shadow-sm"
      />
      <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
        ACME CORP
      </h2>
    </div>
  );
};

export default SidebarLogo;
