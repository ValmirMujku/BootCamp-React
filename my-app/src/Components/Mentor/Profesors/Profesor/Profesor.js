import React from 'react'
 

export default function Profesor(props) {
    return (
        <div className="card w-25"  >
        <img src={props.src} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a   className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    )
}
