import React from "react";

export default function FooterButton(props) {
  return (
    <div>
      <button className={props.class}>{props.title}</button>
    </div>
  );
}

FooterButton.defaultProps = {
  class: "btn btn-secondary w-75 btn-outline-warning fw-bold",
};
