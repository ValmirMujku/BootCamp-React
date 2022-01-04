import React from "react";

export default function Map() {
  return (
    <div className="container-fluid  p-0 m-0">
      <iframe
        style={{ width: "100%" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5126883121125!2d-0.411061184697085!3d51.375254728178135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487675104a8dde0d%3A0x5324ba89e0d0ea40!2sProgramming%20Research%20Ltd!5e0!3m2!1sen!2s!4v1640215243414!5m2!1sen!2s"
        loading="lazy"
      ></iframe>
    </div>
  );
}
