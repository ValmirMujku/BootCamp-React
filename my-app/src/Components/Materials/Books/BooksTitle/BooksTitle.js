import React from "react";

export default function BooksTitle() {
  return (
    <div
      className="text-center  mt-2 bg-dark text-light   "
      style={{
        borderRadius: "30px",
        backgroundColor: "rgb(232,232,232),",
        marginLeft: "400px",
        marginRight: "400px",
      }}
    >
      <span className="text-light fs-4">
        <span className="text-danger fs-4">{"{ "}</span>
        BEST BOOKS TO LEARN FROM
        <span className="text-primary fs-4">{" }"}</span>
      </span>
    </div>
  );
}
