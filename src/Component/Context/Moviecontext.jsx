import { createContext, useContext, useEffect, useState } from "react";
import Favorite from "../../Pages/Favorite";

const movieContext = createContext();

export const usemovieContext = () => 
    useContext(movieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setfavorites] = useState([]); // Initialize as empty array
    useEffect(()=>{
        const storedfavs = localStorage.getItem("favorite")
        if (storedfavs) setfavorites(JSON.parse(storedfavs))
    },[])
    useEffect(()=>{
        localStorage.setItem("favorite", JSON.stringify(favorites))
    },[favorites])
    const addfavorite = (movie) => {
        setfavorites((prev) => [...prev, movie])
    }
    const removefavorite = (movieId) => {
        setfavorites((prev) => prev.filter(movie => movie.id !== movieId))
    }
    const isfavorite = (movieId)=>{
        return favorites.some(movie => movie.id === movieId)
    }
    const value = {
        favorites,
        addfavorite,
        removefavorite,
        isfavorite
    }
    return(
        <movieContext.Provider value={value}>
            {children}
        </movieContext.Provider>
    );
}

