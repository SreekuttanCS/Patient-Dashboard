import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="ACME Logo"
        className="logo h-[70px] w-[70px] m-[10px]"
      />
    </div>
  );
};

export default Logo;
