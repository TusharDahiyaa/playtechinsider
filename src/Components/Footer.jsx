import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Footer() {
  const [emailAddress, setEmailAddress] = useState("");

  const updateSubscription = (event) => {
    event.preventDefault();
    Swal.fire({
      title: `Thank you for subscribing to our newsletter.<br/>You'll receive monthly newsletter at email address: ${emailAddress}`,
      width: 800,
      padding: "1em",
      color: "#716add",
      background: "#000 url(/images/pexels-adrien-olichon-2387793.jpg)",
    });
  };

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <>
      <div id="footer" className="text-center text-light mt-4">
        <h2>Sign Up for our Newsletter</h2>
        <form action="" className="d-flex justify-content-center mb-5">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            id="email-address"
            className={
              isMobile ? "form-control w-75 mx-2" : "form-control w-50 mx-2"
            }
            value={emailAddress}
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
            autoComplete="on"
          />
          <button className="btn btn-outline-info" onClick={updateSubscription}>
            <i className="fa-solid fa-right-long fa-xl"></i>
          </button>
        </form>
        <h3 className="">Address</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
          consequatur labore
          <br />
          Lorem ipsum dolor sit amet consectetu consequatur labore
        </p>
        <hr />
        <h3 className="mb-4 mt-2">Connect with Us</h3>
        <ul className="list-unstyled list-inline social-icons">
          <li className="list-inline-item mx-3">
            <a href="https://www.linkedin.com/in/tushardahiya">
              <i className="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="https://github.com/TusharDahiyaa">
              <i className="fa-brands fa-github fa-xl"></i>
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="https://www.facebook.com/tushardahiya20">
              <i className="fa-brands fa-facebook fa-xl"></i>
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a href="https://www.instagram.com/tushardahiyaa">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
