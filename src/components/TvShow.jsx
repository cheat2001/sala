import React from 'react'
import MovieBlock from '../components/MovieBlock'
import tangled from "../Images/tangled.jpg";
import moana from "../Images/moana.jpg";
import coco from "../Images/coco.jpg";
import lion from "../Images/lion.jpg";
function TvShow() {
  const moviestop=[{img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"}];
  const moviewatching=[{img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"}];
  const movierating=[{img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"}];
  return (
    <div className="w-[100%] bg-[#182335] absolute top-[70px] left-0 pl-[70px]">
     <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={moviewatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={movierating}/>
  </div>
  )
}

export default TvShow