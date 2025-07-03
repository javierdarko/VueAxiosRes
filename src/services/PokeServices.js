import axios from 'axios';

const baseURL = ' https://pokeapi.co/api/v2';

export default {
  async getInformationPokemon() {
    try {
      const response = await axios.get(`${baseURL}/pokemon`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error('Error en la solicitud:', error);

      throw {
        message:
          error?.response?.data?.message || 'Error al obtener la información',
        status: error?.response?.status || null,
      };
    }
  },
};
