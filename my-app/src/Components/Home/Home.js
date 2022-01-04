import React from "react";
import Slider from "./Slider/Slider";
import Description from "./WhoAreWe/Description";
import CountDown from "./CountDown/CountDown";
import Languages from "./HomeLanguages/Languages";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Slider />
      <Description style={{ fontFamily: "RobotoCondensed-Bold" }} />
      <CountDown setDeadline="Feb 20, 2022 19:00:00" />
      <Languages />
      <Footer />
    </div>
  );
}
