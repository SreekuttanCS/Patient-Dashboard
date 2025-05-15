import React from "react";
import image2 from "../../assets/image2.png";

const RightLogin = () => {
  return (
    <div className="h-screen w-1/2 flex flex-col  items-center gap-4 pt-16 relative ">
      <h2 className="text-white text-6xl font-bold ">HELLO !</h2>
      <h3 className="text-white font-bold text-2xl text-center">
        Your health, your journey —
        <span className="block">we're with you every step of the ways</span>
      </h3>
      <div>
        <img
          src={image2}
          className="h-[500px] w-[500px] absolute z-10 right-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightLogin;
