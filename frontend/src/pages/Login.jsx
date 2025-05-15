import React from "react";
import LeftLogin from "../components/login/LeftLogin";
import RightLogin from "../components/login/RightLogin";

const Login = () => {
  return (
    <div className="flex">
      <LeftLogin />
      <RightLogin />
    </div>
  );
};

export default Login;
