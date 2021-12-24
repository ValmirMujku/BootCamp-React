import React from 'react'
import {useEffect, useState, useRef} from 'react';
import WebFont from "webfontloader";

export default function CountDown({setDeadline}) {

   
 const [Days, setDays] = useState(0);
 const [Hours, setHours] = useState(0);
 const [Minutes, setMinutes] = useState(0);
 const [Seconds, setSeconds] = useState(0);

 let interval = useRef();

 
 const startTimer = ()=>{
    const countDownDate = new Date( setDeadline).getTime();

    interval = setInterval( ()=> {
    

   
        var now = new Date().getTime();
          
         
        var distance = countDownDate - now;
          
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
         
          if(distance<0){
              clearInterval(interval.current);
      
          }else{
              setDays(days);
              setHours(hours);
              setMinutes(minutes);
              setSeconds(seconds);
          }
          
          
         
      
      }, 1000);
 };



    useEffect(() => {
        startTimer();
        WebFont.load({
            google: {
              families: ['Neucha']
            }
          });
        return()=>{
                clearInterval(interval.current);
        };
    });
    return (
         
        
        <div className='bg-dark text-center m-0 p-0'>
 
            <h1  ><span className='text-light fw-light'><i className="fa fa-bolt text-danger" aria-hidden="true"></i>Next BootCamp<i className="fa fa-bolt text-danger" aria-hidden="true"></i> - </span><span className='text-center text-warning' style={{fontFamily: 'Neucha'}}>{`${Days}d : ${Hours}h : ${Minutes}m : ${Seconds}s`}</span></h1>
        </div>

 
         
    )
}
