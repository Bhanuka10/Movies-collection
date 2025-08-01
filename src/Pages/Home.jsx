import React, { useEffect, useState } from 'react';
import Moviescart from '../Component/Moviescart/Moviescart.jsx';
import './Home.css';
import { searchmovies, getpopularmovies } from '../Service/api.js';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchquery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadpopularmovies = async () => {
      try {
        const popularmovies = await getpopularmovies();
        setMovies(popularmovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadpopularmovies();
  }, []);

  const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchresults = await searchmovies(searchquery);
      setMovies(searchresults);
    } catch (error) {
      console.error("Error searching movies:", error);
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
     
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="loading">{error}</div>
      ) : movies.length === 0 ? (
        <div className="loading">No movies found.</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Moviescart key={movie.id} movies={movie} />
          ))}
        </div>
      )}
    </div>
   
  );
}

export default Home;
