import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import WebFont from "webfontloader";

export default function InputForm() {
  let history = useNavigate();

  const { id } = useParams();

  const [group, setGroup] = useState({
    members: "",
  });
  const { members } = group;

  const allInitValues = {
    name: "",
    surname: "",
    email: "",
    type: "",
    lecturer: "",
  };

  const [allValues, setAllValues] = useState(allInitValues);
  const [allErrors, setErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const loadGroup = async () => {
    const result = await axios.get(
      `http://localhost:3002/bootstrapGroups/${id}`
    );
    setGroup(result.data);
  };

  useEffect(() => {
    loadGroup();

    AllAlright();

    WebFont.load({
      google: {
        families: ["Roboto Condensed"],
      },
    });
  }, [allErrors]);

  const AllAlright = async () => {
    if (Object.keys(allErrors).length === 0 && isSubmit) {
      var cMembers = parseInt(group.members);
      cMembers += 1;
      var cMembersStr = "" + cMembers;
      setGroup((group.members = cMembersStr));

      await axios.put(`http://localhost:3002/bootstrapGroups/${id}`, group);
      history("/groupsview");
    }
  };

  const handleFunction = (e) => {
    const { name, value } = e.target;
    setAllValues({ ...allValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(allValues));
    setSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.name) {
      errors.name = "Name is Required!";
    } else if (values.name.length < 2) {
      errors.name = "Short Name!";
    } else if (/\d/.test(values.name) === true) {
      errors.name = "Only letters!";
    }

    if (!values.surname) {
      errors.surname = "Surname is Required!";
    } else if (values.surname.length < 2) {
      errors.surname = "Short Surname!";
    } else if (/\d/.test(values.surname) === true) {
      errors.surname = "Only letters!";
    }

    if (!values.email) {
      errors.email = "email is Required!";
    } else if (emailRegex.test(values.email) === false) {
      errors.email = "Wrong format!";
    }

    return errors;
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ fontFamily: "Roboto Condensed" }}
    >
      <div
        className="border border-secondary mt-5 w-50"
        style={{ boxShadow: "10px 10px 5px grey" }}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="text-center">
            <h2>
              <span className="text-danger fw-bold">{"{"}</span>Register
              <span className="text-primary fw-bold">{"}"}</span>
            </h2>
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control bg-dark text-light "
              placeholder="Name"
              name="name"
              value={allValues.name}
              onChange={handleFunction}
            />
            <p className="text-danger">{allErrors.name}</p>
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control bg-dark text-light"
              placeholder="Surname"
              name="surname"
              value={allValues.surname}
              onChange={handleFunction}
            />
            <p className="text-danger">{allErrors.surname}</p>
          </div>
          <div className="form-group p-2">
            <input
              type="text"
              className="form-control bg-dark text-light"
              placeholder="e-mail"
              name="email"
              value={allValues.email}
              onChange={handleFunction}
            />
            <p className="text-danger">{allErrors.email}</p>
          </div>
          <div className="form-group p-2 d-flex flex-row align-items-center">
            <div className="w-50">
              <label for="inputType" class="form-label fw-bold">
                Choose type of Course
              </label>
            </div>
            <div className="form-group w-100">
              <select
                id="inputType"
                className="form-select bg-dark text-light"
                name="type"
                value={allValues.type}
                onChange={handleFunction}
              >
                <option selected>Full-Stack</option>
                <option>Front-End</option>
                <option>Back-End</option>
              </select>
            </div>
          </div>
          <div className="form-group p-2 d-flex flex-row align-items-center">
            <div className="w-50">
              <label for="inputType" className="form-label fw-bold">
                Choose the Lecturer
              </label>
            </div>
            <div className="form-group w-100">
              <select
                id="inputType"
                className="form-select bg-dark text-light"
                name="lecturer"
                value={allValues.lecturer}
                onChange={handleFunction}
              >
                <option defaultValue={123}>Ylber Veliu</option>
                <option>Bryan Cranston</option>
                <option>Alvaro Morte</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-3 mb-3">
            <button className="btn btn-warning fw-bold">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}
