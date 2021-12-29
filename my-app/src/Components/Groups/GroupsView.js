import React from 'react';
import {useState, useEffect} from 'react';


export default function GroupsView() {

    const[allGroups, setAllGroups] = useState();

    useEffect(() => {
        fetch('http://localhost:3002/bootstrapGroups').then(res => res.json() ).then(data=>setAllGroups(data)).catch(e=>console.log(e)); 
    }, []);


    return (
        <div class="card bg-dark text-white">
   
</div>
    )
}
