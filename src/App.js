import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import BlogHome from './Pages/Blog/BlogHome';
import NFLModelPost from './Pages/Blog/NFLModelPost';
import MastersPost from './Pages/Blog/MastersPost';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blog" element={<BlogHome/>}></Route>
            <Route path="/blog/nfl-model" element={<NFLModelPost/>}></Route>
            <Route path="/blog/masters-semester-1" element={<MastersPost/>}></Route>
            <Route path="*" element={<div> 404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
