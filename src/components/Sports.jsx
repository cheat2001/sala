import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Sport1 from "../Images/sport1.jpg";
import Sport2 from "../Images/sport2.jpg";
import Sport3 from "../Images/sport3.jpg"
import Sport4 from "../Images/sport4.jpg"
function MovieContainer() {
  const moviestop=[{img:Sport1,title:"Man u បន្តចាញ់"},{img:Sport2,title:"ខ្សែប្រយុតដែលឡើងជើង"},{img:Sport3,title:"កីឡារករតម្លៃខ្លួនខ្ពស់"},{img:Sport4,title:"De Jong បន្តលេង"}];
  const movieswatching=[{img:Sport1,title:"Man u បន្តចាញ់"},{img:Sport2,title:"ខ្សែប្រយុតដែលឡើងជើង"},{img:Sport3,title:"កីឡារករតម្លៃខ្លួនខ្ពស់"},{img:Sport4,title:"De Jong បន្តលេង"}];
  const moviesrating=[{img:Sport1,title:"Man u បន្តចាញ់"},{img:Sport2,title:"ខ្សែប្រយុតដែលឡើងជើង"},{img:Sport3,title:"កីឡារករតម្លៃខ្លួនខ្ពស់"},{img:Sport4,title:"De Jong បន្តលេង"}];
  
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer