import React from 'react'
import LeftSide from './components/LeftSide'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MovieContainer from './components/MovieContainer';
import Series from './components/Series';
import TvShow from './components/TvShow';
import Education from './pages/Education';
import News from './pages/News';
import Khmer from "./components/Khmer";
import English from "./components/English";
import Math from "./components/Math";
import Nation from "./components/Nation";
import International from "./components/International";
import Sports from "./components/Sports";
import VideoPlayer from './components/VideoPlayer';
import SeeAll from './components/SeeAll';
import SeeAllMath from './components/SeeAllMath';
import SeeAllKhmer from './components/SeeAllKhmer';
import SeeAllEnglish from './components/SeeAllEnglish';
import SeeAllMovies from './components/SeeAllMovies';
import SeeAllSeries from './components/SeeAllSeries';

function App() {
  return (
    <div>
         
         <BrowserRouter>
         <LeftSide/>
            <Routes>
              <Route path="/" element={<Home/>}>
              <Route index element={<MovieContainer/>}/>
              <Route path=':id' element={<VideoPlayer/>}/>
              <Route path='seeall' element={<SeeAllMovies/>}/>
              <Route path='series' element={<Series/>}/>
              <Route path='series/seeall' element={<SeeAllSeries/>}/>
              <Route path='series/:id' element={<VideoPlayer/>}/>

              <Route path='tvshow' element={<TvShow/>}/>
              <Route path='tvshow/seeall' element={<SeeAllMovies/>}/>
              <Route path='tvshow/:id' element={<VideoPlayer/>}/>


              </Route>
              <Route path='education' element={<Education/>} >
              <Route path='khmer' element={<Khmer/>}/> 
              <Route path='khmer/seeall' element={<SeeAllKhmer/>}/> 
              <Route path='khmer/:id' element={<VideoPlayer/>}/>
              <Route path='english' element={<English/>}/>
              <Route path='english/seeall' element={<SeeAllEnglish/>}/>
              <Route path='english/:id' element={<VideoPlayer/>}/>
              <Route path='math' element={<Math/>}/>
              <Route path='math/seeall' element={<SeeAllMath/>}/>
              <Route path='math/:id' element={<VideoPlayer/>}/>

              </Route>
              <Route path='news' element={<News/>} >
              <Route path='nation' element={<Nation/>}/>
              <Route path='nation/:id' element={<VideoPlayer/>}/>
              <Route path='international' element={<International/>}/>
              <Route path='international/:id' element={<VideoPlayer/>}/>
              <Route path='sports' element={<Sports/>}/>
              <Route path='sports/:id' element={<VideoPlayer/>}/>
                   
              </Route>
            </Routes>
          
         </BrowserRouter>
      
    </div>
  )
}

export default App