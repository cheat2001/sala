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
  // const [action,setAction]=useState(false);

  // useEffect(() => {
  //   if(action){
  //     document.body.style.overflow = "hidden";
  //   }
  //   else{
  //     document.body.style.overflow = "auto";

  //   }
  // }, [action]);
  return (
    <div className="w-full h-[70px] flex items-center bg-[#0D0D0D] pl-[150px]">
         <div className="flex gap-4 text-white">
           {/* <AiOutlineMenu onClick={()=>setAction(pre=>!pre)} size={20} className="absolute left-[100px] cursor-pointer"/> */}
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/">Movies</NavLink>
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/series">Series</NavLink>
           <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/tvshow">TV Show</NavLink>
           <Outlet/>
         </div>
         {/* <Menu  length={action?"70px":"-100%"}/> */}
    </div>
  )
}

export default MovieNavbar