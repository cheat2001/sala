import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import Luca from "../Images/luca.jpg";
import Batman from "../Images/batman.jpg";
import Rat from "../Images/Rat.jpg"
import Up from "../Images/up.jpg"
import {Outlet} from "react-router-dom";
function SeeAll() {
   const moviestop=[{img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"},
   {img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"},
   {img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"},
   {img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"},
   {img:Luca,title:"Luca"},{img:Batman,title:"Batman"},{img:Rat,title:"Ratatouille"},{img:Up,title:"Up"}
];
 

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAll