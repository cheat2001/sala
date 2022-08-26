import React from 'react'
import LeftSide from './components/LeftSide'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MovieContainer from './components/MovieContainer';
import Series from './components/Series';
import TvShow from './components/TvShow';
import Education from './pages/Education';
import News from './pages/News';
import Sport from './pages/Sport';
import International from './pages/International';
import Khmer from "./components/Khmer";
import English from "./components/English";
import Math from "./components/Math";
import VideoPlayer from './components/VideoPlayer';
function App() {
  return (
    <div>
         
         <BrowserRouter>
         <LeftSide/>
            <Routes>
              <Route path="/" element={<Home/>}>
              <Route index element={<MovieContainer/>}/>
              <Route path=':id' element={<VideoPlayer/>}/>

              <Route path='series' element={<Series/>}/>
              <Route path='series/:id' element={<VideoPlayer/>}/>

              <Route path='tvshow' element={<TvShow/>}/>
              <Route path='tvshow/:id' element={<VideoPlayer/>}/>


              </Route>
              <Route path='education' element={<Education/>} >
              {/* <Route path='' element={<Khmer/>}/> */}
              <Route path='education:id' element={<VideoPlayer/>}/>
              <Route path='khmer' element={<Khmer/>}/>
              <Route path='english' element={<English/>}/>
              <Route path='math' element={<Math/>}/>
              </Route>
              <Route path='/sport' element={<Sport/>} />
              <Route path='/news' element={<News/>} />
              <Route path='/international' element={<International/>} />
            </Routes>
          
         </BrowserRouter>
      
    </div>
  )
}

export default App