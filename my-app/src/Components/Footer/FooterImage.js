import React from 'react'

export default function FooterImage(props) {
    return (
        <div className="col-2 offset-2">
            <img src= {props.src}/>
        </div>
    )
}
