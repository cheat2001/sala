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
function App() {
  return (
    <div>
         
         <BrowserRouter>
         <LeftSide/>
            <Routes>
              <Route path="/" element={<Home/>}>
              <Route index element={<MovieContainer/>}/>
              <Route path='series' element={<Series/>}/>
              <Route path='tvshow' element={<TvShow/>}/>
              </Route>
              <Route path='education' element={<Education/>} >
              <Route path='' element={<Khmer/>}/>
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