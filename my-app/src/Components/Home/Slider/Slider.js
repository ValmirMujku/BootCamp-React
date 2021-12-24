import React from "react";
import SliderImage from "./SliderImage";
import SilderImages from "./SilderImages";

export default function Slider() {
  return (
    <div
      id="carouselDark"
      className="carousel carousel-light slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselDark"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li data-bs-target="#carouselDark" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselDark" data-bs-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <SliderImage
          src="./Images/img1.jpg"  
          class="d-block w-100 img-fluid"
          alt="Slide 1"
          title="WE"
        />
        <SilderImages
          src="./Images/img2.jpg"
          class="d-block w-100 img-fluid"
          alt="Slide 2"
          title="MAKE"
        />
        <SilderImages
          src="./Images/img3.jpg"
          class="d-block w-100 img-fluid"
          alt="Slide 3"
          title="THE DIFFERENCE"
        />
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselDark"
        role="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselDark"
        role="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}
