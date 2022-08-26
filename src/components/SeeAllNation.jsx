import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import Nation1 from "../Images/nation1.jpg";
import Nation2 from "../Images/nation2.jpg";
import Nation3 from "../Images/nation3.jpg"
import Nation4 from "../Images/nation4.jpg"
import {Outlet} from "react-router-dom";
function SeeAllEnglish() {
    const moviestop=[{img:Nation1,title:"កិច្ចប្រជុំ"},{img:Nation2,title:"សារសំឡេងសម្ដេច"},{img:Nation3,title:"ទុកសោកសៅ"},{img:Nation4,title:"អក្សរារាំរបាំ"},
    {img:Nation1,title:"កិច្ចប្រជុំ"},{img:Nation2,title:"សារសំឡេងសម្ដេច"},{img:Nation3,title:"ទុកសោកសៅ"},{img:Nation4,title:"អក្សរារាំរបាំ"},
    {img:Nation1,title:"កិច្ចប្រជុំ"},{img:Nation2,title:"សារសំឡេងសម្ដេច"},{img:Nation3,title:"ទុកសោកសៅ"},{img:Nation4,title:"អក្សរារាំរបាំ"},
    {img:Nation1,title:"កិច្ចប្រជុំ"},{img:Nation2,title:"សារសំឡេងសម្ដេច"},{img:Nation3,title:"ទុកសោកសៅ"},{img:Nation4,title:"អក្សរារាំរបាំ"},
    {img:Nation1,title:"កិច្ចប្រជុំ"},{img:Nation2,title:"សារសំឡេងសម្ដេច"},{img:Nation3,title:"ទុកសោកសៅ"},{img:Nation4,title:"អក្សរារាំរបាំ"}
];
  
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAllEnglish