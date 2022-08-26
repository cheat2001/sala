import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import tangled from "../Images/tangled.jpg";
import moana from "../Images/moana.jpg";
import coco from "../Images/coco.jpg";
import lion from "../Images/lion.jpg";
import {Outlet} from "react-router-dom";
function SeeAll() {
    const moviestop=[{img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"},
    {img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"},
    {img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"},
    {img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"},
    {img:tangled,title:"Tangled"},{img:moana,title:"Moana"},{img:coco,title:"Coco"},{img:lion,title:"The Lion"}

];
 

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAll