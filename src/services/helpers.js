import axios from "axios";

const API_URL='https://prueba-tecnica-production-f225.up.railway.app';
export const URL_IMG = 'https://image.tmdb.org/t/p/w500/'

export const getMovies = async () => {
    try {
      const url_movies = `${API_URL}/results`;
  
      const { data } = await axios.get(url_movies);
  
      return data;
    } catch (error) {
      return {
        error,
        data: null,
      };
    }
  }

  export const getSingleMovies = async (id) => {
    const url = `${API_URL}/results?id=${id}`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return {
        error,
        data: null,
      };
    }
  };

