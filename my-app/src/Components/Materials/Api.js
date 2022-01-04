import React from "react";
import AllApi from "./Api/AllApi";
import { useEffect } from "react";
import WebFont from "webfontloader";
import ApiText from "./Api/ApiText";

export default function Api() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto Condensed", "Alfa Slab One"],
      },
    });
  }, []);

  return (
    <div
      className="container-fluid m-0 p-0"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      <ApiText />
      <AllApi />
    </div>
  );
}
