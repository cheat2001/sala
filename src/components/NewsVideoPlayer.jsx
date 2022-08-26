import React from 'react'
import {Outlet} from "react-router-dom"
import ReactPlayer from 'react-player'
import Liverpool from "../video/liverpool.mp4";
function NewsVideoPlayer() {
    return (
    <div className='w-[100%] min-h-[92.6vh] overflow-hidden bg-[#0D0D0D]  absolute left-[0] p-6 pl-[100px] top-[70px]'>
        <div className='w-[100%] h-[50vh] sm:h-[70vh]'>
        <ReactPlayer  controls={true} url={Liverpool}   width='100%'height='100%'  />
        </div>
        <h1 style={{fontSize:"35px"}}>Untited video trailer</h1>
        <p style={{fontSize:"25px"}}>2022</p>
    </div>
  )
}

export default NewsVideoPlayer