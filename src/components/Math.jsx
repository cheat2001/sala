import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Khmer1 from "../Images/math1.png";
import Khmer2 from "../Images/math2.jpg";
import Khmer3 from "../Images/math3.png"
import Khmer4 from "../Images/math4.jpg"
function MovieContainer() {
   const moviestop=[{img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"}];
   const movieswatching=[{img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"}];
   const moviesrating=[{img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"}];
 

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer