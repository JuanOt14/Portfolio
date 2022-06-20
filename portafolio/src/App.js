import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './resources/Pages/HomePage/Home';
import Projects from './resources/Pages/ProjectsPage/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/Projects"} element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
