import React from "react";
import { useEffect} from "react";
import WebFont from "webfontloader";

export default function Warning(props) {
  

  useEffect(() => {
     
    WebFont.load({
      google: {
        families: ["Roboto Condensed"],
      },
    });
  });

  return (
    <div >
      <div
        className="container-fluid p-0 m-0 bg-body text-center  fw-bold"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        <span className="text-dark fs-4"><span className="text-danger fs-4">{'{ '}</span>
          {props.title}<span className="text-primary fs-4">{' }'}</span>
        </span>
      </div>

      
    </div>
  );
}
