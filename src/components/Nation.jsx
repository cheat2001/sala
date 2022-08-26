import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Nation1 from "../Images/nation1.jpg";
import Nation2 from "../Images/nation2.jpg";
import Nation3 from "../Images/nation3.jpg"
import Nation4 from "../Images/nation4.jpg"
function MovieContainer() {
   const moviestop=[{img:Nation1,title:"Luca"},{img:Nation2,title:"Batman"},{img:Nation3,title:"Ratatouille"},{img:Nation4,title:"Up"}];
   const movieswatching=[{img:Nation1,title:"Luca"},{img:Nation2,title:"Batman"},{img:Nation3,title:"Ratatouille"},{img:Nation4,title:"Up"}];
   const moviesrating=[{img:Nation1,title:"Luca"},{img:Nation2,title:"Batman"},{img:Nation3,title:"Ratatouille"},{img:Nation4,title:"Up"}];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer