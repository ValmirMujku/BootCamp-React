import React from "react";
import Profesor from "./Profesor/Profesor";

export default function Profesors() {
  return (
    <div className="d-flex justify-content-around mt-2 mb-5 ">
      <Profesor
        src="./Images/ylber.jpg"
        name="Ylber Veliu"
        github="https://github.com/ylberveliu"
        level="Full-Stack"
        email="ylber.veliu@yahoo.com"
        githubUsername="@ylberveliu"
        description="Graduated on 2010 at University of Skopje - Macedonia, In cooperation with diverse global companies"
      />
      <Profesor
        src="./Images/profesor1.jpg"
        name="Bryan Cranston"
        github="https://github.com/ylberveliu"
        level="Front-End"
        email="bryan.cranston@gmail.com"
        githubUsername="@bryancranston"
        description="Graduated on 2004 at University of Berlin - Germany, In cooperation with diverse global companies"
      />
      <Profesor
        src="./Images/Profesor2.jpg"
        name="Alvaro Morte"
        github="https://github.com/ylberveliu"
        level="Back-End"
        email="alvaro_morte@outlook.com"
        githubUsername="@alvaromorte"
        description="Graduated on 2011 at University of Madrid - Spain, In cooperation with diverse global companies"
      />
    </div>
  );
}
