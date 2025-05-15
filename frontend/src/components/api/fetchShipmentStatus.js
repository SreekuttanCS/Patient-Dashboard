import axios from "axios";

const fetchShipmentStatus = async (token) => {
  try {
    const response = await axios.get("http://localhost:5000/api/shipments/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data.shipments && response.data.shipments.length > 0) {
      return response.data.shipments; 
    }

    return []; 
  } catch (err) {
    console.error("Error fetching shipments:", err);
    throw new Error("Failed to load shipments");
  }
};

export default fetchShipmentStatus;
