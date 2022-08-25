import React from 'react'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import jungle from "../Images/jungle.jpg";
import nemo from "../Images/nemo.jpg";
import toyStory from "../Images/toyStory.jpg";
import wall from "../Images/walle.jpg";
function Series() {
  const moviestop=[{img:jungle,title:"jungle"},{img:nemo,title:"nemo"},{img:toyStory,title:"Ratatouille"},{img:wall,title:"Wall E"}];
  const movieswatching=[{img:jungle,title:"jungle"},{img:nemo,title:"nemo"},{img:toyStory,title:"Ratatouille"},{img:wall,title:"Wall E"}];
  const movierating=[{img:jungle,title:"jungle"},{img:nemo,title:"nemo"},{img:toyStory,title:"Ratatouille"},{img:wall,title:"Wall E"}];


  return (
    <div className=" w-[100%] bg-[#182335] absolute top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={movierating}/>
  
  </div>
  )
}

export default Series