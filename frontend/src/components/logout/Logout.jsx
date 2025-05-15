import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <button
      className="bg-[#8acbce] text-white w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-bold transition-all duration-200  "
      onClick={handleLogOut}
    >
      Log Out
    </button>
  );
};

export default Logout;
