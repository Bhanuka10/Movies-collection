import { createContext, useContext, useEffect, useState } from "react";

const movieContext = createContext();

export const usemovieContext = () => 
    useContext(movieContext);

export const MovieProvider = ({children}) => {
    const[favorites, setfavorites] = useState();
    useEffect(()=>{
        const storedfavs = localStorage.getItem("favorite")
        if (storedfavs) setfavorites(JSON.parse(storedfavs))
    },[])
    return(
        <movieContext.Provider value={{}}>
            {children}
        </movieContext.Provider>
    );
}

