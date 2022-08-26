import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import International1 from "../Images/international1.jpg";
import International2 from "../Images/international2.jpg";
import International3 from "../Images/international3.jpg"
import International4 from "../Images/international4.png"
function MovieContainer() {
   const moviestop=[{img:International1,title:"Luca"},{img:International2,title:"Batman"},{img:International3,title:"Ratatouille"},{img:International4,title:"Up"}];
   const movieswatching=[{img:International1,title:"Luca"},{img:International2,title:"Batman"},{img:International3,title:"Ratatouille"},{img:International4,title:"Up"}];
   const moviesrating=[{img:International1,title:"Luca"},{img:International2,title:"Batman"},{img:International3,title:"Ratatouille"},{img:International4,title:"Up"}];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer