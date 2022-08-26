import React from 'react'
import {Outlet} from "react-router-dom"
import ReactPlayer from 'react-player'
import LucaVideo from "../video/luca.mp4";
import khmer from "../video/khmer.mp4";
import {useParams} from "react-router-dom";
function VideoPlayer() {
    const title=["Luca Trailor Movie","Luca Trailor Movie","Luca Trailor Movie"];
    const videoEl={v1:LucaVideo,v2:khmer,v3:LucaVideo}
    const {id} =useParams();
    return (
    <div className='w-[100%] min-h-[92.6vh] overflow-hidden bg-[#0D0D0D]  absolute left-[0] p-6 pl-[100px] top-[70px]'>
        <div className='w-[100%] h-[50vh] sm:h-[70vh]'>
        <ReactPlayer  controls={true} url={`${videoEl.v1}`}      width='100%'
          height='100%'  />
        </div>
        <h1 style={{fontSize:"35px"}}>{(id=="undefined")?"Luca Trailor Movie":title[id]}</h1>
        <p style={{fontSize:"25px"}}>2022</p>
    </div>
  )
}

export default VideoPlayer