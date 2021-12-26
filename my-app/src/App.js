import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Courses from "./Components/Courses/Courses";
import Mentor from "./Components/Mentor/Mentor";
import Books from "./Components/Materials/Books";
import React from "react";
import Api from "./Components/Materials/Api";


function App() {


  return (
    <div  >
       <BrowserRouter>
       <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
              <Route path='courses' element={<Courses/>}></Route>
              <Route path='mentor' element={<Mentor/>}></Route>
              <Route path='books' element={<Books/>}></Route>
              <Route path='api' element={<Api/>}></Route>
          </Routes>
       </BrowserRouter>



    </div>
  );
}

export default App;
