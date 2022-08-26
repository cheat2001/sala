import React from 'react'
import {MdOutlineCastForEducation,MdMovie,MdOutlineSportsVolleyball} from "react-icons/md"
import {SiDcentertainment} from "react-icons/si"
import {FaRegNewspaper} from "react-icons/fa";
import {GiEarthAsiaOceania} from "react-icons/gi";
import {NavLink} from "react-router-dom";
import Education from "../Images/LeftSide/books.png";
import Entertainment from "../Images/LeftSide/entertain.png";
import News from "../Images/LeftSide/news.png";

function LeftSide() {
  
  return (
    <div className="flex flex-col  items-center pt-[70px] gap-14 fixed z-10 h-screen w-[70px] bg-[#0d0a24] border-[0.5px] border-[#ffffff28]">
      <NavLink to="/education/khmer"  >
       <img src={Education} alt="" className='w-[40px]'/>
        {/* <MdOutlineCastForEducation color='white' size={35}/> */}
      </NavLink>
      <NavLink to="/">
        <img src={Entertainment} alt="" className='w-[40px]' />
        {/* <MdMovie color='white' size={35}/> */}
      </NavLink>
    
      <NavLink to="/news/nation">
        <img src={News} alt="" className='w-[40px]'/>
        {/* <FaRegNewspaper color='white' size={35}/> */}
      </NavLink>
    </div>
  )
}

export default LeftSide