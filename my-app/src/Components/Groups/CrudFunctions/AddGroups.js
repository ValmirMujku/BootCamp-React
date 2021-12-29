import  axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';

export default function AddGroups() {
    let history = useNavigate ();
    const [group, setGroup] = useState({
        name: "",
        type: "",
        startDate: "",
        endDate: "",
        lecturer: "",

    });
    const {name, type, startDate, endDate, lecturer} = group;

    const onInputChange = (e)=>{
        setGroup({...group,[e.target.name]: e.target.value})
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post('http://localhost:3002/bootstrapGroups',group);
        history('/groups');
    }
    return (
        <div className='container w-50 mt-5 bg-dark'>
             <form onSubmit={e=> onSubmit(e)}  >
                 <div className='text-center p-4'>
                     <h2 className='text-light'><i className="fa fa-users text-danger" aria-hidden="true"></i> ADD A NEW GROUP</h2>
                     </div> 
                 <div className='form-group p-3'  >
                    <input type='text' className='form-control' placeholder='Name' name='name' value={name} onChange={e => onInputChange(e)}/>
                 </div>
                 <div className='form-group p-3'>
                    <input type='text' className='form-control' placeholder='Type' name='type' value={type} onChange={e => onInputChange(e)} />
                 </div>
                 <div className='form-group p-3'>
                    <input type='date' className='form-control'   name='startDate' value={startDate} onChange={e => onInputChange(e)} />
                 </div>
                 <div className='form-group p-3 '>
                    <input type='date' className='form-control'   name='endDate' value={endDate} onChange={e => onInputChange(e)} />
                 </div>
                 <div className='form-group p-3'>
                    <input type='text' className='form-control' placeholder='Lecturer' name='lecturer' value={lecturer} onChange={e => onInputChange(e)}/>
                 </div>
                 <div className='text-center p-3'>
                 <button className='btn btn-primary p-2'>Add Group</button>
                 </div>
               
             </form>
        </div>
    )
}
