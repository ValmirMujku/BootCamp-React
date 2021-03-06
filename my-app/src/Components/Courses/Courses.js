import React from "react";
import Warning from "./Warning/Warning";
import LanguagesAPI from "./APILanguages/LanguagesAPI";
import Footer from "../Footer/Footer";
import DonationButton from "../Donation/DonationButton";
import Donation from "../Donation/Donation";

export default function Courses() {
  return (
    <div>
      <Warning
        title="Courses that BootCamp Support"
        clas="container-fluid p-0 m-0 bg-body text-center  fw-bold"
        spanclas="text-dark fs-4"
        spanSize="fs-4"
      />
      <DonationButton />
      <LanguagesAPI />
      <Footer />
    </div>
  );
}
