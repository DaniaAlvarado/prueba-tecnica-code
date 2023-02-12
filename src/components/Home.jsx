import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMovies, URL_IMG } from '../services/helpers';
import "./Home.scss";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [list, setlist] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const fetchMovies = async () => {
        const movie = await getMovies();
        console.log(movie);
        setMovies(movie)
        setlist(movie);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const onSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (word) => {
        const result = list.filter((item) => {
            if (item.title.toString().toLowerCase().includes(word.toLowerCase())
                || item.original_language.toString().toLowerCase().includes(word.toLowerCase())) {
                return (item)
            }
        });
        setMovies(result)
    }

    return (
        <>
            <div className='home'>
                <section className='home__column'>
                    <nav>Home</nav>
                    <nav>Films</nav>
                </section>
                <div className='home__list'>
                    <header>
                        <h1>Films</h1>
                        <input onChange={onSearch} value={search} type="text" placeholder='search' />
                    </header>
                    <h2>New Releases</h2>
                    <aside>
                        {movies && movies.length ? (
                            movies.map((movies, index) => (
                                <figure key={index} onClick={() => { navigate(`/details/${movies.id}`) }}>
                                    <img src={URL_IMG + movies.poster_path} alt={movies.id} />
                                </figure>
                            ))
                        ) : (
                            <></>
                        )}
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Home; 