import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeight } from "../../redux/weightSlice";
import axios from "axios";

const AddWeight = () => {
  const [weight, setWeight] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight || !date) {
      setMessage("Please fill in both fields.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      // Correct placement of headers
      const response = await axios.post(
        "http://localhost:5000/api/weights/add",
        {
          weight: weight,
          date: date, // Include date in the request body
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Correct placement of Authorization header
          },
        }
      );

      console.log(response);

      setMessage("✅ Weight added successfully!");
      setWeight(""); // Clear the weight input
      setDate(""); // Clear the date input
    } catch (err) {
      setMessage("❌ Error adding weight.");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ➕ Add New Weight Entry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Weight Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Weight (kg)
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8acbce]"
              placeholder="Enter weight (e.g. 70.5)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8acbce]"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#8acbce] text-white font-semibold py-3 rounded-lg hover:bg-[#77b9bd] transition duration-300"
          >
            Add Weight
          </button>

          {/* Feedback Message */}
          {message && (
            <p className="text-center mt-3 text-sm text-green-600 font-medium">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddWeight;
