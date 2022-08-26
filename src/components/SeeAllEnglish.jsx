import React from 'react'
import MovieNavbar from './HomeNavbar'
import Movie from './Movie'
import AllVideoBlock from './AllVideoBlock'
import Khmer1 from "../Images/english.png";
import Khmer2 from "../Images/english1.jpg";
import Khmer3 from "../Images/english2.jpg"
import Khmer4 from "../Images/english4.jpg"
import {Outlet} from "react-router-dom";
function SeeAllEnglish() {
  const moviestop=[{img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"},
  {img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"},
  {img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"},
  {img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"},
  {img:Khmer1,title:"IELTS ទូទៅ"},{img:Khmer2,title:"រៀនវេយ្យាករណ៍"},{img:Khmer3,title:"Phrasal Verb ដែលគួររៀន"},{img:Khmer4,title:"រៀននិយាយអង់គ្លេស"}

];
  

  return (
    <div className="absolute w-[100%] bg-[#182335] top-[70px] left-0 pl-[70px]">
        <AllVideoBlock Type="All Videos" Wth="400px" Hth="300px" Movies={moviestop}/>
        <Outlet/>
    </div>
  )
}

export default SeeAllEnglish