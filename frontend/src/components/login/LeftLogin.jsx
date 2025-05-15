import React, { useState } from "react";
import Logo from "../common/Logo";
import CustomInput from "../common/CustomInput";
import axios from "axios";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LeftLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );
      const { token, userId } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      navigate("/");
      console.log("Logined", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white h-screen w-1/2 left-login">
      <Logo />
      <div className="  flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-xl">Log Into Your Account</h2>
        <div className="flex flex-col gap-4">
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
            Login
          </button>
        </div>
        <span>
          Don’t have an account?
          <span className="text-green-500"> Sign in</span>
        </span>
      </div>
    </div>
  );
};

export default LeftLogin;
