import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../services/helpers';
import "./Home.scss";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [list, setlist] = useState([]);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const fetchMovies = async () => {
        const product = await getMovies();
        console.log(product);
        setMovies(product)
        setlist(product);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const onSearch = (e) => {
        setSearch(e.target.value)
        filter(e.target.value)
    }

    const filter = (word) => {
        const result = list.filter((item) =>{
            if (item.title.toString().toLowerCase().includes(word.toLowerCase())
            ||item.original_language.toString().toLowerCase().includes(word.toLowerCase()) ){
                return(item)
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
                <div className='home__img'>
                    <header className='header'>
                        <h1 className='header__title'>Films</h1>
                        <input onChange={onSearch} value={search} type="text" placeholder='search' className='header__search' />
                    </header>
                    {movies && movies.length ? (
                        movies.map((movies, index) => (
                            <aside key={index}>
                                {/* <figure className='image'>
                                <img src={movies.poster_path} alt="" />
                            </figure> */}
                                <div className='name' onClick={() => { navigate(`/details/${movies.id}`) }}>{movies.original_title}</div>
                            </aside>
                        ))
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home; 