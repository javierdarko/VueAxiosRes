import axios from "axios";

const baseURL = "http://172.20.1.31/asuntos_estudiantiles_PRUEBA/datos_socieconomicos/info";

export default {
  async getInformationStudent() {
    try {
      const response = await axios.get(`${baseURL}/informacion_estudiante`, {
        headers: {
          "Content-Type": "application/json",
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
