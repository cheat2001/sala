import React ,{useState,useEffect } from 'react'
import { Routes, Route, NavLink,Link ,Outlet } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai"
import Menu from "../components/Menu";
function MovieNavbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#FFFFFF" : "rgba(248, 248, 248, 0.548)",
    };
  };
  const [state,setState]=useState(false);

  return (
    <div className="w-full h-[70px] flex items-center bg-[#0D0D0D] pl-[150px]">
         <div className="flex gap-4 text-white">
         
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="Khmer">Khmer</NavLink>
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="english">English</NavLink>
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="Math">Math</NavLink>
           <Outlet/>
         </div>
    </div>
  )
}

export default MovieNavbar