import React from 'react'
import Movie from '../components/Movie'
import {useNavigate} from "react-router-dom";
function MovieBlock({Type,Wth,Hth,Movies}) {
  const navigate=useNavigate();
  return (
    <div className=" w-[100%] px-3 pt-6 my-5 ">
          <div className="w-100% flex justify-between border-b-[0.5px] border-[#ffffff6e] p-4 mb-5">
              <h2>{Type}</h2>
            
          </div>
          <div className="flex flex-wrap justify-center gap-5">
          {Movies&&Movies.map(movie=><Movie Wth={Wth} Hth={Hth} Img={movie.img} Title={movie.title} Id={movie.id}/>)}
          </div>
    </div>
  )
}

export default MovieBlock