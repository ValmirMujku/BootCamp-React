import React from "react";

export default function SliderImage(props) {
  return (
    <div className="carousel-item active">
      <img src={props.src} className={props.class} alt={props.alt} />
      <div className="carousel-caption d-none d-sm-block">
        <p className="display-5 text-light fw-bold">{props.title}</p>
      </div>
    </div>
  );
}
