import axios from "axios";

const fetchPatientInfo = async (token) => {
  try {
    const userId = localStorage.getItem("userId");

    const response = await axios.get(
      `http://localhost:5000/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.user;
    
  } catch (err) {
    console.error(err);
    return err;
  }
};

export default fetchPatientInfo;
