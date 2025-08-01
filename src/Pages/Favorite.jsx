import React from 'react';
import './Favorite.css'; 
import { usemovieContext } from '../Component/Context/Moviecontext';
import Moviescart from '../Component/Moviescart/Moviescart.jsx';

function Favorite() {
    const { favorites } = usemovieContext();
    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <Moviescart key={movie.id} movies={movie} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="favorites">
            <h1>No Favorite Movies Yet</h1>
        </div>
    );
}

export default Favorite;
