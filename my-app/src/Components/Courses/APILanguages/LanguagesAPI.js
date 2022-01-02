import React from 'react'
import {useState, useEffect} from 'react';
import WebFont from "webfontloader";
import { Link } from 'react-router-dom';


export default function LanguagesAPI() {
    
    const [Api, setApi] = useState();


    useEffect(() => {
        WebFont.load({
            google: {
              families: ["Roboto Condensed","Alfa Slab One"],
            },
          });
        fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((res) =>  setApi(res.data));
    }, [])

    return (
        <>
      {Api && Api.map(data=>  <div className="d-flex   border border-light border-top-0 border-end-0 border-start-0 "  style={{ fontFamily: "Roboto Condensed", backgroundColor:'#25383C' }}>
          
      <div className="container-fluid mt-2 mb-1">
        <iframe
          style={{ width: "300px", height: "170px" }}
           className='border border-secondary'
          src={data.youtube}
        ></iframe>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div>
              <h3 className='text-light fw-bold pt-2'><i className="fa fa-video-camera text-danger" aria-hidden="true"></i> {data.title}</h3>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12">
          <div>
              <span className='placeholder-glow'></span>
           <p className="fw-bold "><i class="fa fa-youtube-play text-light" aria-hidden="true"></i> <span className='  text-light'>Youtube-Channel: </span><a href={data.youtube} class="text-decoration-none  ">Youtube</a> </p>
           <p className=" fw-bold "><i class="fa fa-facebook-official text-light" aria-hidden="true"></i> <span className='  text-light'>Group-Community: </span><a href={data.facebook} class="text-decoration-none">Facebook</a> </p>
           <p className="shadow-lg  bg-body rounded border-4 fw-bold fst-italic"><i class="fa fa-code" aria-hidden="true"></i> <span>Link to web: </span><a href={data.perprogramera}class="text-decoration-none">PERPROGRAMER-WEB SITE</a> </p>
            
            </div>
          </div>
        </div>
       
      </div>

      <div className='d-flex flex-column align-items-center justify-content-center w-100 ps-3 '>
          <h4 className='text-secondary fst-italic' style={{ fontFamily: "Alfa Slab One" }}><i class="fa fa-credit-card  " style={{color:'rgb(234,188,106)'}} aria-hidden="true"></i> PRICE: <span style={{color:'rgb(234,188,106)'}}>{data.price} &#36;</span></h4>
          <div className='text-center'>
          <Link to='/register' type="button" class="btn btn-outline-light">JOIN BOOTCAMP-22</Link>
          </div>
      </div>

  
      <div class="container-fluid " id="rate">
        <input type="radio" id="star5" name="rate" value="5" />
        <label for="star5" title="text">
          5 stars
        </label>
        <input type="radio" id="star4" name="rate" value="4" />
        <label for="star4" title="text">
          4 stars
        </label>
        <input type="radio" id="star3" name="rate" value="3" />
        <label for="star3" title="text">
          3 stars
        </label>
        <input type="radio" id="star2" name="rate" value="2" />
        <label for="star2" title="text">
          2 stars
        </label>
        <input type="radio" id="star1" name="rate" value="1" />
        <label for="star1" title="text">
          1 star
        </label>
      </div>
    </div>)}
    </>
    )
}
