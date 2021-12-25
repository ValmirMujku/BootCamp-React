import React from 'react'
import { useEffect} from "react";
import WebFont from "webfontloader";
 
 
export default function Profesor(props) {

    useEffect(() => {
     
        WebFont.load({
          google: {
            families: ["Roboto Condensed"],
          },
        });
      });

      
    return (
        <div className="card w-25 bg-dark  border border-light rounded"  style={{ fontFamily: "Roboto Condensed" }} >
        <img src={props.src} className='rounded ' />
      <div className="card-body">
        <h5 className="card-title text-dark shadow-lg p-1 mb-3 bg-secondary rounded text-center fw-bold fst-italic">{props.name}</h5>
        
        <p className="card-text ">
        <i class="fa fa-github text-light" aria-hidden="true"></i> <span className=' text-light'>GitHub: </span><a href={props.github} class="text-decoration-none">{props.githubUsername}</a>
        </p>
        <p className="card-text">
        <i class="fa fa-codepen text-light" aria-hidden="true"></i> <span className='  text-light'>{props.level}</span> 
        </p>
        <p className="card-text">
        <i class="fa fa-envelope text-light" aria-hidden="true"></i> <span className=' text-light'>{props.email}</span> 
        </p>
        <p className="card-text">
          <span className=' text-light'>{props.description}</span> 
        </p>
        <div className='text-center'>
        <a   className="btn btn-primary">
          CONTACT
        </a>
        </div>
        
      </div>
    </div>
    )
}