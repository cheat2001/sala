import React from 'react'
import {MdOutlineCastForEducation,MdMovie,MdOutlineSportsVolleyball} from "react-icons/md"
import {SiDcentertainment} from "react-icons/si"
import {FaRegNewspaper} from "react-icons/fa";
import {GiEarthAsiaOceania} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import Education from "../Images/LeftSide/EducationIcon.png";
import Entertainment from "../Images/LeftSide/Entertainment.png";
import International from "../Images/LeftSide/International.png";
import News from "../Images/LeftSide/News.png";
import Sport from "../Images/LeftSide/Sport.png";

function LeftSide() {
  
  return (
    <div className="flex flex-col  items-center pt-[70px] gap-5 fixed z-10 h-screen w-[70px] bg-[#0d0a24] border-[0.5px] border-[#ffffff28]">
      <NavLink to="/education" >
       <img src={Education} alt="" className='w-[40px]'/>
        {/* <MdOutlineCastForEducation color='white' size={35}/> */}
      </NavLink>
      <NavLink to="/">
        <img src={Entertainment} alt="" className='w-[40px]' />
        {/* <MdMovie color='white' size={35}/> */}
      </NavLink>
      <NavLink to="/sport">
        <img src={Sport} alt="" className='w-[40px]'/>
        {/* <MdOutlineSportsVolleyball color='white' size={35}/> */}
      </NavLink>
      <NavLink to="/news">
        <img src={News} alt="" className='w-[40px]'/>
        {/* <FaRegNewspaper color='white' size={35}/> */}
      </NavLink>
      <NavLink to="/international">
        <img src={International} alt="" className='w-[40px]'/>
        {/* <GiEarthAsiaOceania color='white' size={35}/> */}
      </NavLink>
    </div>
  )
}

export default LeftSide