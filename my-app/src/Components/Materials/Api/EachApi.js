import React from 'react';
import {useState, useEffect} from 'react';

export default function EachApi() {

    const[allApi, setApi] = useState();
     

    useEffect(() => {

        fetch("https://api.publicapis.org/entries")
          .then((resp) => resp.json())
          .then((data) => {
              setApi(data.entries);
          })
          .catch((e) => console.log(e));
      },[]);

      var count = 1;

  
  
    return (
        <>
         {allApi && allApi.map(dt=> <tr key={dt.Link} className='bg-dark' >
        <th className = 'text-light'scope="row">{count++}</th>
        <td className='bg-secondary fst-italic fw-bold'><i className="fa fa-arrow-circle-right text-light" aria-hidden="true"></i> {dt.API}</td>
        <td className='text-light'>{dt.HTTPS==true?'Yes':'No'}</td>
        <td className='text-light'><i class="fa fa-quote-right" aria-hidden="true"></i> {dt.Description}</td>
        <td className='bg-secondary'> <a href={dt.Link} className="text-decoration-none text-dark fw-bold"><i class="fa fa-file-code-o" aria-hidden="true"></i> {dt.Link}</a></td>
        <td className='text-light'>{dt.Category}</td>
      </tr>)}
        </>
       
       
    )
}
