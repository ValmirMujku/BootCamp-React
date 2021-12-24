import React from "react";
import { useState, useEffect } from "react";
import WebFont from "webfontloader";

export default function Language(props) {
  const [showText, setShowText] = useState(false);
  const [showSpan, setShowSpan] = useState(true);

  const x = () => {
    setShowText(!showText);
    setShowSpan(!showSpan);
  };

  useEffect(() => {
    WebFont.load({
        google: {
          families: ['Neucha']
        }
      });

});

  return (
    <div className="card w-25 mb-5 shadow-lg p-3 mb-5 bg-body rounded">
      <img src={props.src} alt={props.alt} className="card-img-top " />

      <div className="card-body bg-dark text-light">
        <h5 className="card-title text-center fw-bold"  style={{fontFamily: 'Neucha',color:props.color}}>{props.title}</h5>
        <p className="card-text text-center">
          {showText && props.description}
          {showSpan && <span className="fw-lighter">Get all the infos...</span>}{" "}
          <a
            className="btn btn btn-outline-secondary  p-1"
            style={{ fontSize: "13px" }}
            onClick={x}
          >
            {showText ? "hide" : "more"}
          </a>
        </p>
        <div className="text-center">
          <a className="btn btn-primary ">ATTEND</a>
        </div>
      </div>
    </div>
  );
}
