import React from "react";
import { useState, useEffect } from "react";

export default function EachBook() {
  const [allbooks, setBooks] = useState();

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=B6K9oTmBKIehrVKAUDGbrZyq0yRtAZtr"
    )
      .then((resp) => resp.json())
      .then((data) => {
        setBooks(data.results.books);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {allbooks &&
        allbooks.map((dt) => (
          <div
            className="card w-25   m-5 border border-dark "
            style={{
              fontFamily: "Roboto Condensed",
              boxShadow: "30px 25px 40px 5px grey",
            }}
          >
            <h5 className="card-title text-center fw-bold fst-italic">
              <i class="fa fa-paperclip" aria-hidden="true"></i> {dt.title}
            </h5>
            <img src={dt.book_image} style={{ height: "400px" }} />
            <div className="card-body bg-secondary">
              <p className="card-text ">
                <h6 className="text-light">
                  <span className="fw-bold text-dark">
                    <i class="fa fa-user-o" aria-hidden="true"></i> Author:
                  </span>{" "}
                  <span className="fst-italic">{dt.author}</span>
                </h6>
              </p>
              <p className="card-text">
                <h6 className="text-light">
                  <span className="fw-bold text-dark">
                    <i class="fa fa-chain-broken" aria-hidden="true"></i>{" "}
                    Publisher:
                  </span>
                  <span className="fst-italic">{dt.publisher}</span>{" "}
                </h6>
              </p>
              <p className="card-text">
                <p>
                  <span className="fw-bold text-dark">
                    <i class="fa fa-align-left" aria-hidden="true"></i>{" "}
                    Description:{" "}
                  </span>
                  <span
                    className="text-light fst-italic"
                    style={{ fontSize: "13px" }}
                  >
                    {dt.description}
                  </span>
                </p>
              </p>
              <p className="card-text"></p>
              <div className="text-center">
                <a
                  href={dt.amazon_product_url}
                  className="btn btn-outline-dark fw-bold"
                >
                  <i class="fa fa-download text-light" aria-hidden="true"></i>{" "}
                  BUY NOW
                </a>
              </div>
            </div>
            <div class="card-footer text-center">
              <small class="text-muted">
                ISBN:{" "}
                {dt.isbns[0].isbn13 === ""
                  ? "4123456765452"
                  : dt.isbns[0].isbn13}
              </small>
            </div>
          </div>
        ))}
    </>
  );
}
