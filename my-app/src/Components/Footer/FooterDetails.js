import React from "react";

export default function FooterDetails(props) {
  return (
    <div className="col-2">
      <h5 className="text-danger">{props.title}</h5>
      <ul className="list-unstyled mx-3">
        {props.items.map((it) => (
          <li   className="nav-item">
            <a href="#" className="text-decoration-none text-light">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
