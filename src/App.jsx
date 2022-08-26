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
import EducationVideoPlayer from './components/EducationVideoPlay';
import NewsVideoPlayer from './components/NewsVideoPlayer';
import SeeAll from './components/SeeAll';
import SeeAllMath from './components/SeeAllMath';
import SeeAllKhmer from './components/SeeAllKhmer';
import SeeAllEnglish from './components/SeeAllEnglish';
import SeeAllMovies from './components/SeeAllMovies';
import SeeAllSeries from './components/SeeAllSeries';
import SeeAllTvShow from './components/SeeAllTvShow';
import SeeAllNation from './components/SeeAllNation';
import SeeAllInternational from './components/SeeAllInternational';
import SeeAllSports from './components/SeeAllSports';

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
              <Route path='seeall/:id' element={<VideoPlayer/>}/>
              <Route path='series' element={<Series/>}/>
              <Route path='series/seeall' element={<SeeAllSeries/>}/>
              <Route path='series/seeall/:id' element={<VideoPlayer/>}/>
              <Route path='series/:id' element={<VideoPlayer/>}/>
              <Route path='tvshow' element={<TvShow/>}/>
              <Route path='tvshow/seeall' element={<SeeAllTvShow/>}/>
              <Route path='tvshow/seeall/:id' element={<VideoPlayer/>}/>
              <Route path='tvshow/:id' element={<VideoPlayer/>}/>

              </Route>
              <Route path='education' element={<Education/>} >
              <Route path='khmer' element={<Khmer/>}/> 
              <Route path='khmer/seeall' element={<SeeAllKhmer/>}/> 
              <Route path='khmer/seeall/:id' element={<EducationVideoPlayer/>}/> 
              <Route path='khmer/:id' element={<EducationVideoPlayer/>}/>
              <Route path='english' element={<English/>}/>
              <Route path='english/seeall' element={<SeeAllEnglish/>}/>
              <Route path='english/seeall/:id' element={<EducationVideoPlayer/>}/>
              <Route path='english/:id' element={<EducationVideoPlayer/>}/>
              <Route path='math' element={<Math/>}/>
              <Route path='math/seeall' element={<SeeAllMath/>}/>
              <Route path='math/seeall/:id' element={<EducationVideoPlayer/>}/>
              <Route path='math/:id' element={<EducationVideoPlayer/>}/>

              </Route>
              <Route path='news' element={<News/>} >
              <Route path='nation' element={<Nation/>}/>
              <Route path='nation/seeall' element={<SeeAllNation/>}/>
              <Route path='nation/seeall/:id' element={<NewsVideoPlayer/>}/>
              <Route path='nation/:id' element={<NewsVideoPlayer/>}/>
              <Route path='international' element={<International/>}/>
              <Route path='international/seeall' element={<SeeAllInternational/>}/>
              <Route path='international/seeall/:id' element={<NewsVideoPlayer/>}/>
              <Route path='international/:id' element={<NewsVideoPlayer/>}/>
              <Route path='sports' element={<Sports/>}/>
              <Route path='sports/seeall' element={<SeeAllSports/>}/>
              <Route path='sports/seeall/:id' element={<NewsVideoPlayer/>}/>
              <Route path='sports/:id' element={<NewsVideoPlayer/>}/>
                   
              </Route>
            </Routes>
          
         </BrowserRouter>
      
    </div>
  )
}

export default App