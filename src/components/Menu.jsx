import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineFieldTime} from "react-icons/ai";
import {RiCompassDiscoverLine,} from "react-icons/ri";
import {BsPeople} from "react-icons/bs";
import {NavLink} from "react-router-dom";
function Menu({length}) {
    const navLinkStyle = ({ isActive }) => {
        return {
          color: isActive ? "#FFFFFF" : "rgba(248, 248, 248, 0.548)",
          borderRight:isActive?"solid 2px rgba(34, 80, 245,1)":"none",
        };
      };
      const [state,setState]=useState(false);

  return (
    <div style={{left:length}} className="p-5 duration-300 w-[300px] h-[100vh] bg-[#201010] absolute top-[70px]">
         <p className="text-[white] mb-4">Menu</p>
         <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/" className='flex  align-middle p-[10px] duration-100 gap-8 hover:bg-[#12a6e0]'>
            <AiOutlineHome size={20}/>
            <p>Home</p>
         </NavLink>
         <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/discovery" className='flex  align-middle p-[10px] duration-100 gap-8 hover:bg-[#12a6e0]'>
            <RiCompassDiscoverLine size={20}/>
            <p>Discovery</p>
         </NavLink>
         <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/community" className='flex  align-middle p-[10px] duration-100 gap-8 hover:bg-[#12a6e0]'>
            <BsPeople size={20}/>
            <p>Community</p>
         </NavLink>
         <NavLink onClick={()=>setState(false)} style={navLinkStyle} to="/commingsoon" className='flex  align-middle p-[10px] duration-100 gap-8 hover:bg-[#12a6e0]'>
            <AiOutlineFieldTime size={20}/>
            <p>Comming Soon!</p>
         </NavLink>
    </div>
  )
}

export default Menu