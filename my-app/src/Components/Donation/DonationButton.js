import React from "react";
import { Link } from "react-router-dom";

export default function DonationButton() {
  return (
    <div className="container-fluid mt-2 mb-3   d-flex flex-row justify-content-center align-items-center">
      <span className="small text-dark mx-3">
        Donate that BootCamp can support more{" "}
      </span>
      <Link to="/donation" class="btn btn-outline-success fw-bold">
        <i class="fa fa-money" aria-hidden="true"></i> DONATE{" "}
        <i class="fa fa-money" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
