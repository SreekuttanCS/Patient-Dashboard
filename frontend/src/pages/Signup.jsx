import React from "react";
import LeftSignUp from "../components/signup/LeftSignUp";
import RightSignUp from "../components/signup/RightSignUp";

const Signup = () => {
  return (
    <div className="flex">
      <LeftSignUp />
      <RightSignUp />
    </div>
  );
};

export default Signup;
