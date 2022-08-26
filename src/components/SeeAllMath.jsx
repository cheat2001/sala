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
  const moviestop=[{img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"},
  {img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"},
  {img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"},
  {img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"},
  {img:Khmer1,title:"ដោះស្រាយសមីការ"},{img:Khmer2,title:"អាំងតេក្រាល"},{img:Khmer3,title:"រៀនគិតបែបគណិតវិទ្យា"},{img:Khmer4,title:"កូនសមីការ"},
 ];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAllMath