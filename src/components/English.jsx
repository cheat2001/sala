import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Khmer1 from "../Images/english.png";
import Khmer2 from "../Images/english1.jpg";
import Khmer3 from "../Images/english2.jpg"
import Khmer4 from "../Images/english4.jpg"
function MovieContainer() {
   const moviestop=[{img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"}];
   const movieswatching=[{img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"}];
   const moviesrating=[{img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"}];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer