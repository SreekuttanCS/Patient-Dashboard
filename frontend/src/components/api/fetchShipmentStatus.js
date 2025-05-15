import axios from "axios";

const fetchShipmentStatus = async (token) => {
  try {
    const response = await axios.get("http://localhost:5000/api/shipments/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const shipments = response?.data?.shipments;

    return Array.isArray(shipments) ? shipments : [];
  } catch (err) {
    console.error("❌ Error fetching shipments:", err.message || err);
  }
};

export default fetchShipmentStatus;
