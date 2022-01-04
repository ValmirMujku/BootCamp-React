import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import Warning from "../Courses/Warning/Warning";

export default function Groups() {
  const [group, setGroup] = useState([]);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/bootstrapGroups");
    setGroup(result.data.reverse());
  };

  const deleteGroup = async (id) => {
    const confirmBox = window.confirm("Do you want to delete this Group?");
    if (confirmBox === true) {
      await axios.delete(`http://localhost:3002/bootstrapGroups/${id}`);
      loadUser();
    }
  };

  useEffect(() => {
    loadUser();
    WebFont.load({
      google: {
        families: ["Roboto Condensed"],
      },
    });
  }, []);

  return (
    <>
      <Warning
        title="Groups of BootCamp"
        clas="container-fluid p-0 m-0 bg-body text-center  fw-bold"
        spanclas="text-dark fs-1"
        spanSize="fs-1"
      />
      <div
        className="container mt-5 border border-dark rounded"
        style={{ fontFamily: "Roboto Condensed" }}
      >
        <table class="table mt-3   fs-5 ">
          <thead>
            <tr className="  text-dark fw-bold  ">
              <th scope="col">#</th>
              <th scope="col">
                <i class="fa fa-asterisk" aria-hidden="true"></i> Name
              </th>
              <th scope="col">
                <i class="fa fa-file-code-o" aria-hidden="true"></i> Type
              </th>
              <th scope="col">
                <i class="fa fa-calendar" aria-hidden="true"></i> Start-Date
              </th>
              <th scope="col">
                <i class="fa fa-calendar" aria-hidden="true"></i> End-Date
              </th>
              <th scope="col">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i> Lecturer
              </th>
              <th scope="col">
                <Link
                  to="/groups/add"
                  className="btn btn-outline-primary fw-bolder w-100"
                >
                  <i class="fa fa-plus" aria-hidden="true"></i> Add Group
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {group.map((gr, index) => (
              <tr className=" fs-6 fw-bold align-middle">
                <th className="bg-dark text-light" scope="row">
                  {index + 1}
                </th>
                <td className="bg-dark text-light fs-5  ">
                  <i class="fa fa-asterisk" aria-hidden="true"></i> {gr.name}
                </td>
                <td className="bg-dark text-light">
                  <i class="fa fa-file-code-o" aria-hidden="true"></i> {gr.type}
                </td>
                <td className="text-success bg-dark">
                  <i class="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {gr.startDate}
                </td>
                <td className="text-danger bg-dark">
                  <i class="fa fa-calendar" aria-hidden="true"></i> {gr.endDate}
                </td>
                <td className="bg-dark text-light border border-light  ">
                  <i class="fa fa-user-circle-o" aria-hidden="true"></i>{" "}
                  {gr.lecturer}
                </td>

                <td className="bg-dark">
                  <div className="text-center">
                    <Link
                      to={`/groups/edit/${gr.id}`}
                      className="btn btn-success m-1  w-50 border border-dark"
                    >
                      <i class="fa fa-pencil" aria-hidden="true"></i> Edit
                    </Link>
                    <Link
                      to=""
                      className="btn btn-danger m-1 w-50 border border-dark"
                      onClick={() => deleteGroup(gr.id)}
                    >
                      <i class="fa fa-trash" aria-hidden="true"></i> Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
