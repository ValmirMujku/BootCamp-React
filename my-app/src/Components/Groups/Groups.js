import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import WebFont from "webfontloader";

export default function Groups() {

    const [group, setGroup] = useState([]);

    const loadUser = async ()=>{
        const result = await axios.get('http://localhost:3002/bootstrapGroups');
        setGroup(result.data.reverse());
    }

    const deleteGroup = async (id) => {
        await axios.delete(`http://localhost:3002/bootstrapGroups/${id}`);
        loadUser();
    }

    useEffect(() => {
        loadUser();
        WebFont.load({
            google: {
              families: ["Roboto Condensed"],
            },
          });
    }, [])

    return (
        <div className='container mt-5'>
  <table class="table border border shadow fs-5 " style={{ fontFamily: "Roboto Condensed"}}>
        <thead>
          <tr className='bg-dark text-light '>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Start-Date</th>
            <th scope="col">End-Date</th>
            <th scope="col">Lecturer</th>
            <th scope="col"><Link to='/groups/add' className='btn btn-outline-primary fw-bold'>Add Group</Link></th>
          </tr>
        </thead>
        <tbody>
       {
           group.map((user, index)=>(
               <tr className=' fs-6 fw-bold'>
                   <th scope='row'>{index+1}</th> 
                   <td className='bg-body text-dark fs-5'>{user.name}</td>
                   <td>{user.type}</td>
                   <td className='text-success'>{user.startDate}</td>
                   <td className='text-danger'>{user.endDate}</td>
                   <td className='bg-dark text-light'>{user.lecturer}</td>
                   <td className='bg-secondary'>
                     <Link to ='/' className='btn btn-primary m-2'><i class="fa fa-eye" aria-hidden="true"></i> View</Link> 
                     <Link to ={`/groups/edit/${user.id}`} className='btn btn-success m-2'><i class="fa fa-pencil" aria-hidden="true"></i> Edit</Link> 
                     <Link  to='' className='btn btn-danger m-2' onClick={()=>deleteGroup(user.id)}><i class="fa fa-trash" aria-hidden="true"></i> Delete</Link>   
                   </td>
               </tr>
           ))
       }
        </tbody>
      </table>
        </div>
      
    )
}
