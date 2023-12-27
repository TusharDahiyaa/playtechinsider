import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

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

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const resetToken = window.location.pathname.split("/")[2];
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/resetpassword/${resetToken}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, confirmPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
      }
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: `Your password is changed successfully!
          You can close this tab now`,
          showConfirmButton: false,
          timer: 2000,
        });
        setSuccessMessage(data.message);
        setError("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Password reset failed");
      setSuccessMessage("");
    }
  };

  return (
    <LoginBackground className="p-5">
      <div className="container text-light">
        <h1 className="text-center my-4 border border-5 p-2">Reset Password</h1>
        <form
          onSubmit={handleSubmit}
          className="w-50 mx-auto border border-5 rounded px-3 py-3"
        >
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            required
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control mb-3"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="on"
            required
          />

          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

          <button type="submit" className="btn btn-primary mb-4">
            Reset Password
          </button>
        </form>
      </div>
    </LoginBackground>
  );
}
