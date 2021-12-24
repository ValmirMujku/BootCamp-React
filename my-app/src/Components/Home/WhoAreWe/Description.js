import React from "react";
import { useEffect } from "react";
import WebFont from "webfontloader";

export default function Description() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Droid Sans', 'Chilanka']
          }
        });
       }, []);
      
  return (
    <div className="container-fluid text-center fw-bold bg-secondary text-light " >
        <div>
             <img src='./Images/logo.png' style={{width:'20%'}}/>
        </div>
      
        
      <span   style={{fontFamily: 'Droid Sans'}} >
        Reviews, press mentions, or user-generated content can be included on
        your About Us page to share how you’re impacting your customers or your
        industry. There are a variety of ways to integrate social proof into
        your About Us page, from embedding Instagram galleries of customer
        content to featuring the logos of publications that have covered you, to
        highlighting a quote you lifted from a customer review. Press mentions,
        awards, and other wins are common examples of milestones that can be
        used to help tell the middle of your story.
      </span>

       
    </div>
  );
}
