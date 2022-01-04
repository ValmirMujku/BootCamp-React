import React from "react";
import { useState, useEffect } from "react";
import Warning from "../Courses/Warning/Warning";
import WebFont from "webfontloader";
import CountDown from "../Home/CountDown/CountDown";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export default function GroupsView() {
  const [allGroups, setAllGroups] = useState();

  var dt = new Date();
  var gg;

  useEffect(() => {
    fetch("http://localhost:3002/bootstrapGroups")
      .then((res) => res.json())
      .then((data) => setAllGroups(data))
      .catch((e) => console.log(e));

    WebFont.load({
      google: {
        families: ["Roboto Condensed"],
      },
    });
  }, []);

  return (
    <div>
      <Warning
        title="Groups of BootCamp"
        clas="container-fluid p-0 m-0 bg-body text-center  fw-bold"
        spanclas="text-dark fs-1"
        spanSize="fs-1"
      />
      <div
        className="d-flex flex-column  justify-content-center align-items-center mt-4"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        {allGroups &&
          allGroups.map((gr) => (
            <div className="card text-center w-75 mt-5">
              <div className="card-header fs-3 bg-dark text-light">
                <i class="fa fa-code" aria-hidden="true"></i> {gr.type}
                <i class="fa fa-code" aria-hidden="true"></i>
              </div>
              <div className="card-body" style={{ backgroundColor: "#F0FFF0" }}>
                <h5
                  className="card-title fs-4"
                  style={{ textShadow: "1px 1px 2px #000000" }}
                >
                  <i class="fa fa-circle-thin" aria-hidden="true"></i> {gr.name}
                </h5>
                <p className="card-text fs-4">
                  Start:{" "}
                  <span className="fw-lighter">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                    {gr.startDate}
                  </span>{" "}
                  - End:{" "}
                  <span className="fw-lighter">
                    <i class="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                    {gr.endDate}
                  </span>
                </p>
                <p className="card-text fs-5 fw-bold">
                  {" "}
                  Lecturer: "{gr.lecturer}"{" "}
                </p>
                <Link
                  to={`/groupsview/register/${gr.id}`}
                  className={`btn btn-outline-primary fw-bolder w-25 ${
                    gr.members == 50 ? "disabled" : ""
                  } ${(gg = new Date(gr.startDate) > dt ? "" : "disabled")} `}
                >
                  <i class="fa fa-hand-pointer-o" aria-hidden="true"></i> JOIN
                </Link>
                <p className="card-text mt-2 fs-5">
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  <span className="text-danger fw-bold">
                    {gr.members}/50 MEMBERS:
                  </span>{" "}
                  Join before gets full{" "}
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
                </p>
                <p className="card-text progress mt-1">
                  <div
                    className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${(100 / 50) * gr.members}%` }}
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </p>
              </div>
              <div className="card-footer text-muted bg-dark d-flex flex-row justify-content-center">
                <div
                  className={` ${(gg =
                    new Date(gr.startDate) > dt
                      ? "spinner-border text-light mt-2 fs-3 mx-2"
                      : "")}`}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
                {<CountDown setDeadline={gr.startDate} />}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
