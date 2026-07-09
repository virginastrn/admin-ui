import axios from "axios";

const API_URL = "https://jwt-auth-eight-neon.vercel.app";

// GOAL SERVICE
export const goalService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/goals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("===== GOAL RESPONSE =====");
    console.log(response.data);

    return response.data;

  } catch (error) {
    console.log(error.response);

    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};
// EXPENSE SERVICE
export const expenseService = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(`${API_URL}/expenses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("FULL RESPONSE :", response.data);

    // response.data sudah berupa array
    return response.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};

// BILL SERVICE
export const billService = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/bills`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.data;
  } catch (error) {
    throw {
      status: error.response?.status,
      msg: error.response?.data?.msg,
    };
  }
};