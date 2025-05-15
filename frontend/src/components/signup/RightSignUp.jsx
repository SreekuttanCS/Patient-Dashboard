import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import axios from "axios";

const RightSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      console.log("Created", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white h-screen w-1/2 right-signup flex flex-col justify-center items-center">
      <h2>Create Account</h2>
      <div className="flex flex-col">
        <CustomInput
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <CustomInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div>
          <CustomInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-sm text-black-500 text-end mb-4 self-end"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <button
          className="w-100 bg-[#8ACBCE] p-3 rounded-2xl text-white"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
      <span>
        Already have an account? <span className="text-green-500">Log in</span>
      </span>
    </div>
  );
};

export default RightSignUp;
