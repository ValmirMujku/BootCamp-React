import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Courses from "./Components/Courses/Courses";
import Mentor from "./Components/Mentor/Mentor";
import Books from "./Components/Materials/Books";
import React from "react";
import Api from "./Components/Materials/Api";
import Groups from "./Components/Groups/Groups";
import NotFound from "./Components/Error/NotFound"; 
import AddGroups from "./Components/Groups/CrudFunctions/AddGroups";
import EditGroups from "./Components/Groups/CrudFunctions/EditGroups"; 
import GroupsView from "./Components/Groups/GroupsView";
import RegisterForm from "./Components/Groups/CrudFunctions/RegisterForm";

function App() {

   

  return (
    <div  >
       <BrowserRouter>
       <Navigation/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='courses' element={<Courses/>}></Route>
              <Route exact path='mentor' element={<Mentor/>}></Route>
              <Route exact path='books' element={<Books/>}></Route>
              <Route exact path='api' element={<Api/>}></Route>
              <Route exact path='groups' element={<Groups/>}></Route>
              <Route exact path='groups/add' element={<AddGroups/>}></Route>
              <Route  path='groups/edit/:id' element={<EditGroups/>}></Route>
              <Route exact path='groupsview' element={<GroupsView/>}></Route>
              <Route exact path='groupsview/register/:id' element={<RegisterForm/>}></Route>
              <Route path='*' element={<NotFound />} /> 
          </Routes>
       </BrowserRouter>



    </div>
  );
}

export default App;
