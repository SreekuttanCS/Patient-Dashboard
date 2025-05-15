import axios from "axios";

const fetchWeightData = async (token) => {
  try {
    const userId = localStorage.getItem("userId");
    const response = await axios.get(
      `http://localhost:5000/api/weights/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch weight data"); // Or handle more gracefully
  }
};

export default fetchWeightData;
