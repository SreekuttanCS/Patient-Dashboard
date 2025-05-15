import React from "react";
import SidebarLogo from "../sidebar/SidebarLogo";
import SidebarList from "../sidebar/SidebarList";
import "../sidebar/sidebar.css";
import Logout from "../logout/Logout";

function Sidebar({ setActiveSection, activeSection }) {
  return (
    <div className="sidebar h-screen bg-white flex flex-col justify-between items-center py-6">
      <SidebarLogo />
      <SidebarList
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div>
        <Logout />
      </div>
    </div>
  );
}

export default Sidebar;
