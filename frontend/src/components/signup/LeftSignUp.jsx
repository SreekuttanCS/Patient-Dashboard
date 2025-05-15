import React from "react";
import "./signup.css";
import image1 from "../../assets/image1.png";
import Logo from "../common/Logo";
const LeftSignUp = () => {
  return (
    <div className="left-signup h-screen w-1/2 relative">
      <Logo />
      <div className=" text-center mt-10">
        <h2 className="quotes-signup">Every Steps Counts</h2>
        <h2 className="quotes-signup px-5">Every Load Matters.</h2>
      </div>
      <div>
        <img
          src={image1}
          className="h-[500px] w-[500px] absolute z-10 left-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default LeftSignUp;
