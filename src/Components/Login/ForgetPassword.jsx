import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const LoginBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("./images/chuck-fortner-LFVBohYmtgc-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 90%;
  margin: auto;
  margin-top: 2%;
  border-radius: 1rem;
`;

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    Loading.circle();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/api/forgetpassword`,
        { email }
      );

      if (
        response.status === 200 ||
        response.data.message === `Email has been sent to ${email}`
      ) {
        Report.success(
          `Email sent!`,
          `The link to reset the password has been sent to your email address. <br/><br/> --> Play Tech Insider`,
          `Okay`,
          () => {
            setLoading(false);
            Loading.remove();
            setError("");
            setTimeout(() => {
              window.location.replace("/login");
            }, 2000);
          }
        );
      }
    } catch (err) {
      setError(err.response.data.error);
      console.log("Error: " + err);
      setLoading(false);
    }
  };

  return (
    <LoginBackground className="p-5">
      <div className="container text-light">
        <h1 className="text-center my-4 border border-5 p-2">Reset Password</h1>
        <form
          onSubmit={handleSubmit}
          className="w-50 py-4 px-3 mx-auto border border-5"
        >
          <label htmlFor="inputEmail4" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb-3"
            id="inputEmail4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
          />
          {error && <div className="text-danger">{error}</div>}
          <button
            type="submit"
            className="btn btn-primary mt-3"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </LoginBackground>
  );
}
