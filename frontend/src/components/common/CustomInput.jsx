import React from "react";

const CustomInput = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border-none outline-none border-b-2 border-black p-2 mb-4"
    />
  );
};

export default CustomInput;
