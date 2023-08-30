import React, { useEffect, useState } from 'react'
import { getMovies } from '../services/helpers';
import "./Home.scss";
import Pagination from './details/Pagination';

const Home = () => {

    const [movies, setMovies] = useState([]);

     const [page, setPage] = useState(1);
     const perPage = 4;
  
     const max = movies.length / perPage;



    const fetchMovies = async () => {
        const movie = await getMovies();
        console.log(movie.data.results);
        setMovies(movie.data.results)
    };

    useEffect(() => {
        fetchMovies();
    }, []);




    return (
        <>
            <div className='home'>
                <section className='home__column'>
                    <img src="data:image/png;base64,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" alt="logo" />
                    <nav>Home</nav>
                    <nav>Films</nav>
                </section>
                <div className='home__movies'>
                    <article className=''>
                        <p>progreso de peliculas producidas</p>
                    </article>
                    <article className=''>
                        <nav>video</nav>
                        <nav>imagen</nav>
                    </article>
                </div>
                <div className='home__list'>
                    {movies && movies.length ? (
                        movies.slice(
                            (page - 1) * perPage,
                            (page - 1) * perPage + perPage).map((movies, index) => (
                            <div key={index}>
                                <p>{movies.name}</p>
                                <img src={`${movies.thumbnail.path}.${movies.thumbnail.extension}`} alt={movies.id} />
                                <p className='info'>Comics: {movies.comics.available}</p>
                                <p className='info'>Peliculas: {movies.series.available}</p>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
                {/* page={page} setPage={setPage} max={max}  */}
                <Pagination page={page} setPage={setPage} max={max}/>
            </div>
        </>
    )
}

export default Home; 