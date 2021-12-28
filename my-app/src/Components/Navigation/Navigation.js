import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark  ">
      <div className="container-fluid">
        <a className="navbar-brand text-warning" href="#">
          <span className="text-danger fs-4">{"{ "}</span>
          BOOTCAMP - PER PROGRAMERA
          <span className="text-primary fs-4">{" }"}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDark"
          aria-controls="navbarDark"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <Link to="/" className="nav-link fs-6 ">
                <i className="fa fa-align-justify text-warning"></i> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="courses" className="nav-link fs-6 ">
                <i
                  className="fa fa-graduation-cap text-warning"
                  aria-hidden="true"
                ></i> COURSES  
                  
              </Link>
            </li>
            <li className="nav-item">
              <Link to="mentor" className="nav-link fs-6 ">
                <i className="fa fa-user text-warning" aria-hidden="true"></i> MENTOR
                  
              </Link>
            </li>
          
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-6"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-clone text-warning" aria-hidden="true"></i> MATERIALS
              </a>
              <ul
                className="dropdown-menu bg-dark"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                <Link to="books" className="nav-link fs-6 ">
                <i className="fa fa-book text-warning" aria-hidden="true"></i> BOOKS
                
              </Link>
                </li>
                <li>
                <Link to="api" className="nav-link fs-6 ">
                <i className="fa fa-cogs text-warning" aria-hidden="true"></i> API's
                
              </Link>
                </li>
          
              </ul>
            </li>
            <li className="nav-item">
              <Link to="groups" className="nav-link fs-6 ">
              <i class="fa fa-users text-warning" aria-hidden="true"></i> GROUPS <span className='fst-italic'>-(AdminPanel)</span> 
                  
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
