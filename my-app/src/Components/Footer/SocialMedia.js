import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function SocialMedia() {
    return (
        <div className="d-flex justify-content-center bg-dark ms-1 pb-3 ">

         <div className='ms-3'>
         <SocialIcon url="https://jaketrent.com" network="tumblr" />
         
         </div>
         <div className='ms-3'>
         <SocialIcon url="https://linkedin.com/in/jaketrent" />
         </div>
         <div className='ms-3'>
         <SocialIcon url="https://facebook.com/in/jaketrent" />
         </div>
         <div className='ms-3'>
         <SocialIcon url="https://gmail.com/in/jaketrent" />
         </div>
         <div className='ms-3'>
         <SocialIcon url="https://google.com/in/jaketrent" />
         </div>
      </div>
    )
}
