import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Courses from "./Components/Courses/Courses";
import Mentor from "./Components/Mentor/Mentor";
import Feedback from "./Components/Feedback/Feedback";
import React from "react";


function App() {


  return (
    <div  >
       <BrowserRouter>
       <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
              <Route path='courses' element={<Courses/>}></Route>
              <Route path='mentor' element={<Mentor/>}></Route>
              <Route path='feedback' element={<Feedback/>}></Route>
          </Routes>
       </BrowserRouter>



    </div>
  );
}

export default App;
