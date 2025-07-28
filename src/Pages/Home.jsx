import React, { useState } from 'react'
import Moviescart from '../Component/Moviescart/Moviescart.jsx'
function Home() {
    const movies = [
        {id:1, title:"Johnwick", release_date:"2020"},
        {id:2, title:"Avengers", release_date:"2019"},
        {id:3, title:"Harry Potter", release_date:"2001"},
        {id:4, title:"The Lord of the Rings", release_date:"2001"}
    ]
    const [searchquery, setSearchQuery] = useState("");

        const handlesearch =() =>{
            alert(searchquery)

        }
    
  return (
    <div className="Home">
        <form onSubmit={handlesearch} className="search-form">
            <input type="text" 
            placeholder="Search for a movie..." 
            className="search-input" 
            value={searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className="search-button">Search</button>
       </form>
       
      <div className="movie-grid">
        {movies.map((movie)=> movie.title.toLowerCase().includes(searchquery.toLowerCase()) && (
            <Moviescart key={movie.id} movies={movie}/> 
            ))}
      </div>
    </div>
  )
}

export default Home
