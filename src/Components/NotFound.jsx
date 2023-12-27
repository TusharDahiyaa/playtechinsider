import React from "react";

export default function NotFound() {
  return (
    <>
      <div className="container text-light">
        <h1 className=" text-center my-4 border border-5 py-5">
          This page does not exist
        </h1>
        <p className="text-center mt-3 fs-5 text">
          <a href="/" className="text-decoration-none text-light">
            Go back to the homepage by clicking here.
          </a>
        </p>
      </div>
    </>
  );
}
