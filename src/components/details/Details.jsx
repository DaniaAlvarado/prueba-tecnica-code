import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleMovies, URL_IMG } from '../../services/helpers';
import "./Details.scss";

const Details = () => {

  const [detail, setDetail] = useState({})

  const { id } = useParams();
  console.log(id)

  const getMovie = async () => {
    const movie = await getSingleMovies(id);
    const movieDetail = movie[0];
    setDetail(movieDetail);

    console.log(movieDetail);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className='details'>
      {detail ? (
        <div className='details__section'>
          <figure className='details__img'>
            <img src={URL_IMG + detail.poster_path} alt={detail.id} />
          </figure>
          <nav className='details__title'>
            <h3>{detail.title}</h3>
            <p >Description: {detail.overview}</p>
            <span>Language: {detail.original_language}</span>
          </nav>
        </div>
      ) : (
        "cargando ..."
      )}
    </div>
  )
}

export default Details
