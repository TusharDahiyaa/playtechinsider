import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
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

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/api/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        if (token) {
          // Save the JWT token to localStorage and redirect the user to the dashboard page
          await localStorage.setItem("access_token", response.data.token);
          let timerInterval;
          Swal.fire({
            title: "🎉 Logged in successfully",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#000 url(/images/pexels-adrien-olichon-2387793.jpg)",
            html: "Auto-closing in <b></b> milliseconds.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          })
            .then(() =>
              Promise.all([
                Promise.resolve(), // Wait for toast animation to finish
                new Promise((resolve) => setTimeout(resolve, 1000)), // Wait for timer duration
              ])
            )
            .then(() => window.location.replace("/store"));
        } else {
          setError("Login failed. Token is missing in the response.");
        }
      } else {
        setError("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <LoginBackground className="p-5">
      <div className="container text-light">
        <h1 className=" text-center my-4 border border-5 p-2">Login</h1>
        <form
          className="w-50 mx-auto border border-5 rounded px-3 py-3"
          onSubmit={handleLogin}
        >
          <input type="hidden" name="_csrfToken" value={window.csrf} />
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username:{" "}
          </label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username/email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <label htmlFor="password" className="col-sm-3 col-form-label">
            Password:{" "}
          </label>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-4">
            Login
          </button>
          <br />
          <a href="/forgetpassword" className="text-decoration-none text-light">
            Forget Username/Password?
          </a>
          <br />
          <a href="/signup" className="text-decoration-none text-light">
            Sign Up/Create a account
          </a>
        </form>
      </div>
    </LoginBackground>
  );
}
