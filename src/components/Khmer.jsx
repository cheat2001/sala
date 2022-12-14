import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Khmer1 from "../Images/khmer1.jpg";
import Khmer2 from "../Images/khmer2.jfif";
import Khmer3 from "../Images/khmer3.jpg"
import Khmer4 from "../Images/khmer4.png"
function MovieContainer() {
   const moviestop=[{img:Khmer1,title:"ដើមឈើដុះលើប្រាសាទ"},{img:Khmer2,title:"ដំរីជំនាន់ដើម"},{img:Khmer3,title:"សម្រស់អង្គរធំ"},{img:Khmer4,title:"ជំនាន់សំឡុតស"}];
   const movieswatching=[{img:Khmer1,title:"ដើមឈើដុះលើប្រាសាទ"},{img:Khmer2,title:"ដំរីជំនាន់ដើម"},{img:Khmer3,title:"សម្រស់អង្គរធំ"},{img:Khmer4,title:"ជំនាន់សំឡុតស"}];
   const moviesrating=[{img:Khmer1,title:"ដើមឈើដុះលើប្រាសាទ"},{img:Khmer2,title:"ដំរីជំនាន់ដើម"},{img:Khmer3,title:"សម្រស់អង្គរធំ"},{img:Khmer4,title:"ជំនាន់សំឡុតស"}];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer