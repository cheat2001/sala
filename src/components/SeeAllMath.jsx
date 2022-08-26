import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import Khmer1 from "../Images/math1.png";
import Khmer2 from "../Images/math2.jpg";
import Khmer3 from "../Images/math3.png"
import Khmer4 from "../Images/math4.jpg"
import {Outlet} from "react-router-dom";
function SeeAllMath() {
    const moviestop=[{img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"},
    {img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"},
    {img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"},
    {img:Khmer1,title:"Luca"},{img:Khmer2,title:"Batman"},{img:Khmer3,title:"Ratatouille"},{img:Khmer4,title:"Up"}
];
 

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAllMath