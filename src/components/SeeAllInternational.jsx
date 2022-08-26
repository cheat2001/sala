import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import International1 from "../Images/international1.jpg";
import International2 from "../Images/international2.jpg";
import International3 from "../Images/international3.jpg"
import International4 from "../Images/international4.png"
import {Outlet} from "react-router-dom";
function SeeAllInternational() {
    const moviestop=[{img:International1,title:"សង្គ្រាមនៅអ៊ុយគ្រែន"},{img:International2,title:"ព័ត៌មានថ្មីៗ"},{img:International3,title:"របួសច្រើនណាស់"},{img:International4,title:"សម្ដីមន្រ្តីចិន"},
    {img:International1,title:"សង្គ្រាមនៅអ៊ុយគ្រែន"},{img:International2,title:"ព័ត៌មានថ្មីៗ"},{img:International3,title:"របួសច្រើនណាស់"},{img:International4,title:"សម្ដីមន្រ្តីចិន"},
    {img:International1,title:"សង្គ្រាមនៅអ៊ុយគ្រែន"},{img:International2,title:"ព័ត៌មានថ្មីៗ"},{img:International3,title:"របួសច្រើនណាស់"},{img:International4,title:"សម្ដីមន្រ្តីចិន"},
    {img:International1,title:"សង្គ្រាមនៅអ៊ុយគ្រែន"},{img:International2,title:"ព័ត៌មានថ្មីៗ"},{img:International3,title:"របួសច្រើនណាស់"},{img:International4,title:"សម្ដីមន្រ្តីចិន"},
    {img:International1,title:"សង្គ្រាមនៅអ៊ុយគ្រែន"},{img:International2,title:"ព័ត៌មានថ្មីៗ"},{img:International3,title:"របួសច្រើនណាស់"},{img:International4,title:"សម្ដីមន្រ្តីចិន"}
];
 
  
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAllInternational