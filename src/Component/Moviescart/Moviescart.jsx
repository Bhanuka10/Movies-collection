import React from 'react'
import './Moviescart.css';

function Moviescart ({movies}) {
    const onfavoriteclick = () => {
        alert(`You have added ${movies.title} to your favorites!`)
    }
    
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onfavoriteclick}> ♥ </button>
                
            </div>
            <div className='movie-info'>
                <h3>{movies.title}</h3>
                <p>{movies.release_date?.split("-")[0]}</p>

            </div>

        </div>

    </div>
  )
}

export default Moviescart