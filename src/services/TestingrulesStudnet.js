import axios from "axios";

const baseURL = "http://localhost:3000";

export default {
  async getStudentsUnrc() {
    try {
      const response = await axios.get(`${baseURL}/GetStudentsUnrc`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      throw {
        message:
          error?.response?.data?.message || "Error al obtener la información",
        status: error?.response?.status || null,
      };
    }
  },
  async postStudentUnrc(studentData) {
    try {
      const response = await axios.post(
        `${baseURL}/PostStudentsUnrc`,
        studentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      throw {
        message:
          error?.response?.data?.message || "Error al guardar la información",
        status: error?.response?.status || null,
      };
    }
  },
};
