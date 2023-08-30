import axios from "axios";

const API_URL_MARVEL= 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6b90a8fab91183c42ba2f73c6460ecf8&hash=c9a537de43aa9a17ed095b86fdeb4025'

// https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=6b90a8fab91183c42ba2f73c6460ecf8&hash=c9a537de43aa9a17ed095b86fdeb4025

//private: 09876db92b3dc5f42d5df3ed0de80bfff4b38926
//public: 6b90a8fab91183c42ba2f73c6460ecf8

// 109876db92b3dc5f42d5df3ed0de80bfff4b389266b90a8fab91183c42ba2f73c6460ecf8

//c9a537de43aa9a17ed095b86fdeb4025

export const getMovies = async () => {
    try {
      const url_movies = `${API_URL_MARVEL}`;
  
      const { data } = await axios.get(url_movies);
  
      return data;
    } catch (error) {
      return {
        error,
        data: null,
      };
    }
  }


