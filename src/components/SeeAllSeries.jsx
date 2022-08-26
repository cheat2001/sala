import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import jungle from "../Images/jungle.jpg";
import nemo from "../Images/nemo.jpg";
import toyStory from "../Images/toyStory.jpg";
import wall from "../Images/walle.jpg";
import {Outlet} from "react-router-dom";
function SeeAll() {
    const moviestop=[{img:jungle,title:"jungle",id:1},{img:nemo,title:"nemo",id:2},{img:toyStory,title:"Ratatouille",id:3},{img:wall,title:"Wall E",id:4},
    {img:jungle,title:"jungle",id:1},{img:nemo,title:"nemo",id:2},{img:toyStory,title:"Ratatouille",id:3},{img:wall,title:"Wall E",id:4},
    {img:jungle,title:"jungle",id:1},{img:nemo,title:"nemo",id:2},{img:toyStory,title:"Ratatouille",id:3},{img:wall,title:"Wall E",id:4},
    {img:jungle,title:"jungle",id:1},{img:nemo,title:"nemo",id:2},{img:toyStory,title:"Ratatouille",id:3},{img:wall,title:"Wall E",id:4}
];
 

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAll