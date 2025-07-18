import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export default {
  async getInformationStudent(curp) {
    try {
      const response = await axios.get(`${baseURL}/informacion_estudiante`, {
        params: { curp },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic dW5yYzpaYWprbGphc2szNGpsa3NkbGZramRzPQ==",
        },
      });
      return response;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      throw {
        message:
          error?.response?.data?.message || "Error al obtener la información",
        status: error?.response?.status || null,
      };
    }
  },
};
