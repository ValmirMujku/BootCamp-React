import React from "react";
import { useEffect } from "react";
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
    <div>
      <div className={props.clas} style={{ fontFamily: "Roboto Condensed" }}>
        <span className={props.spanclas}>
          <span className={`text-danger ${props.spanSize}`}>{"{ "}</span>
          {props.title}
          <span className={`text-primary ${props.spanSize}`}>{" }"}</span>
        </span>
      </div>
    </div>
  );
}
