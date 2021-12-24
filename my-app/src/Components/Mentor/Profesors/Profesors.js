import React from 'react'
import Profesor from './Profesor/Profesor' 

export default function Profesors() {
    return (
        <div className="d-flex justify-content-around mt-5 ">
                <Profesor src='./Images/ylber.jpg' name='Ylber Veliu'/> 
                <Profesor src='./Images/profesor1.jpg' name='Bryan Cranston'/> 
                <Profesor src='./Images/Profesor2.jpg' name='Alvaro Morte'/> 
            </div>
    )
}
