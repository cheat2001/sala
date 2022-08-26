import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import MovieBlock from './MovieBlock'
import Khmer1 from "../Images/english.png";
import Khmer2 from "../Images/english1.jpg";
import Khmer3 from "../Images/english2.jpg"
import Khmer4 from "../Images/english4.jpg"
function MovieContainer() {
   const moviestop=[{img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"}];
   const movieswatching=[{img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"}];
   const moviesrating=[{img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"}];
 
  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <MovieBlock Type="Top Trending" Wth="400px" Hth="300px" Movies={moviestop}/>
        <MovieBlock Type="Countinue Watching" Wth="350px" Hth="300px" Movies={movieswatching}/>
        <MovieBlock Type="Top Rating" Wth="300px" Hth="200px" Movies={moviesrating}/>
    </div>
  )
}

export default MovieContainer