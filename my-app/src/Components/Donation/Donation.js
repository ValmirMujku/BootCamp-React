import React from "react";
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Footer from "../Footer/Footer";

export default function Donation() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
      <>
    <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5" >
      <div className="border border-secondary w-50 d-flex justify-content-center align-items-center flex-column bg-body" style={{boxShadow:'10px 10px 5px grey'}}>
      <div className="text-center text-dark">
                    <h2><span className="text-danger">{'{'}</span>Credit-Card Details<span className="text-primary">{'}'}</span></h2>
            </div>
        <div className="mt-4">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
        <div className=" mt-1 d-flex justify-content-center align-items-center flex-column">
          
          <form className=" ">
            <div className="form-group p-2">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="form-control text-light bg-dark"
              />
            </div>

            <div className="form-group p-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="form-control text-light bg-dark"
              />
            </div>

            <div className="form-group p-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY Expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="form-control text-light bg-dark"
              />
            </div>

            <div className="form-group p-2">
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className="form-control text-light bg-dark"
              />
            </div>
            <div className="text-center mt-3 mb-3">
            <button className="btn btn-success fw-bold w-75">PAY</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
