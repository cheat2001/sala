import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Luca from "../Images/luca.jpg";
import Batman from "../Images/batman.jpg";
import Rat from "../Images/Rat.jpg"
import Up from "../Images/up.jpg"
function MovieContainer() {
   const moviestop=[{img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"}];
   const movieswatching=[{img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"}];
   const moviesrating=[{img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"}];

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer