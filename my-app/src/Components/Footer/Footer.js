import React from "react";
import FooterButton from "./FooterButton";
import FooterDetails from "./FooterDetails";
import { useEffect } from "react";
import WebFont from "webfontloader";
import FooterImage from "./FooterImage";
import SocialMedia from "./SocialMedia";
import Map from "./Map";

export default function Footer() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto Condensed"],
      },
    });
  });

  return (
    <div className="container-fluid p-0 m-0">
      <div className="container-fluid bg-dark border border-light border-end-0 border-start-0 border-top-0">
        <div className="row pt-4" style={{ fontFamily: "Roboto Condensed" }}>
          <div className="col-2 offset-md-4 offset-xl-4 offset-lg-4 offset-sm-4">
            <FooterButton title="REGISTER" />
          </div>
          <div className="col-2">
            <FooterButton title="FEEDBACK" />
          </div>
        </div>

        <div className="row pt-3" style={{ fontFamily: "Roboto Condensed" }}>
          <FooterDetails
            title="LANGUAGES"
            items={["Java", "JavaScript", "C#", "PHP", "SQL"]}
          />
          <FooterDetails
            title="FRAMEWORKS"
            items={["SpringBoot", "React", "NodeJS", "Laravel", "BootStrap"]}
          />
          <FooterDetails
            title="PLATFORMS"
            items={["Facebook", "Youtube", "Web", "Twitter"]}
          />
          <FooterDetails
            title="CATEGORIES"
            items={["Junior", "Senior", "Full-stack"]}
          />
          <FooterImage src="./Images/logofooter.png" />
        </div>
        <SocialMedia />

        
      </div>
      <Map />
    </div>
  );
}
