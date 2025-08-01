import React from 'react'
import './Moviescart.css';
import { usemovieContext } from '../Context/Moviecontext';

function Moviescart ({movies}) {

    const { isfavorite, addfavorite, removefavorite } = usemovieContext()
    const favorite = isfavorite(movies.id) 
    const onfavoriteclick = (e) => {
        e.preventDefault()
        if (favorite) {
            removefavorite(movies.id)
        } else {
            addfavorite(movies)
        }
    }
    
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
            <div className='movie-overlay'>
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onfavoriteclick}> ♥ </button>

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