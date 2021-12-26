import React from 'react';
import EachApi from './EachApi';

export default function AllApi() {
    return ( 
        <div className='table-responsive'>
            <table className="table">
        <thead>
          <tr >
          <th scope="col">#</th>
            <th scope="col">API</th>
            <th scope="col">HTTPS</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">LINK</th>
            <th scope="col">CATEGORY</th>
          </tr>
        </thead>
        <tbody>
          <EachApi/>
        
        </tbody>
      </table>
        </div> 
       
    )
}
