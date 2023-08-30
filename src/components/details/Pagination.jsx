import React from 'react';
import "./Pagination.scss";

const Pagination = ({ page, setPage, max }) => {
    const nextPage = () => {
        setPage (parseInt(page) + 1);
      };
    
      const previousPage = () => {
        setPage (parseInt(page) - 1);
      };

    
    return (
        <div className='buttons'>
            <button disabled={page === 1 || page < 1} onClick={previousPage}><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2854 3.14844L2.56726 9.95647C2.35758 10.1414 2.36495 10.4706 2.5827 10.646L10.2854 16.8499" stroke="black" stroke-width="4" stroke-linecap="square" />
            </svg></button>
            <p>{page} / {max}</p>
            <button disabled={page === Math.ceil (max) || page > Math.ceil (max)}
        onClick={nextPage}><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.7904 16.8516L11.037 10.0333C11.2322 9.84969 11.2251 9.53736 11.0219 9.36271L3.7904 3.15007" stroke="black" stroke-width="4" stroke-linecap="square" />
            </svg></button>
        </div>
    )
}

export default Pagination

