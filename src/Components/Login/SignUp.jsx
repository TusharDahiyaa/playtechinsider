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

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const user = { name, username, email, password, confirmPassword };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) {
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (data.error === "Email already exists") {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "This email address has been registered.",
              showConfirmButton: false,
              timer: 3000,
            }).then(setError("This email address has been registered."));
          } else if (data.error === "Username already exists") {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title:
                "The username you entered is taken. Please choose a different one.",
              showConfirmButton: false,
              timer: 3000,
            }).then(
              setError(
                "The username you entered is taken. Please choose a different one."
              )
            );
          } else {
            throw new Error(data.error || "Something went wrong!");
          }
        } else {
          // Handle non-JSON response (e.g., HTML error page)
          throw new Error("Server error");
        }
      } else {
        Swal.fire({
          title: "Signed up successfully!",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/pexels-adrien-olichon-2387793.jpg)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/bjE9JbNSckM0w.webp")
            left top
            no-repeat
          `,
        }).then(() => {
          // Redirect after the toast disappears
          window.location.href = "/login";
        });
      }

      setLoading(false);
      // Handle successful sign up here
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "User not created");
      setLoading(false);
    }
  };

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <LoginBackground className={isMobile ? "p-2" : "p-5"}>
      <div className="container text-light">
        <h1 className="text-center my-4 border border-5 p-2">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className={
            isMobile
              ? "mx-auto border border-5 py-4 px-2 mb-5"
              : "w-50 mx-auto border border-5 py-4 px-3 mb-5"
          }
        >
          <input
            type="hidden"
            name="_csrfToken"
            value={window.__CSRF_TOKEN__}
          />
          <label htmlFor="name" className="col-sm-3 col-form-label">
            Name:{" "}
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="on"
            required
          />
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email:{" "}
          </label>
          <input
            type="email"
            className="form-control mb-3"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="on"
            required
          />
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username:{" "}
          </label>
          <input
            type="text"
            className="form-control mb-3"
            id="username"
            placeholder="Enter any username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="on"
            required
          />
          <label htmlFor="password" className="col-sm-3 col-form-label">
            Password:{" "}
          </label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            placeholder="Enter a new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
            required
          />
          <label htmlFor="confirmPassword" className="col-sm-3 col-form-label">
            Confirm Password:{" "}
          </label>
          <input
            type="password"
            className="form-control mb-3"
            id="confirmPassword"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="on"
            required
          />
          {error && <p>{error}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <button type="submit" className="btn btn-primary mb-4">
              Sign Up
            </button>
          )}
        </form>
      </div>
    </LoginBackground>
  );
}
