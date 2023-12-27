import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../context/cartReducer";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState("");
  const userToken = localStorage.getItem("access_token");
  const { dispatch } = useContext(Context);

  const fetchUserCart = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/auth/user/cart`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        // if (response.status === 203) {
        //   console.log("Your cart is empty!");
        // }
        dispatch({ type: "INITIALIZE_CART", payload: data });
      } else {
        console.error("Error fetching user cart after response:", data.error);
      }
    } catch (error) {
      console.error("Error fetching user cart:", error.message);
    }
  };

  const checkLoggedInStatus = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/checkLoggedIn`,
        {
          method: "GET",
          credentials: "include", // Include cookies in the request
          headers: {
            Authorization: `Bearer ${userToken}`, // Include the user token
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedIn(true);
        if (process.env.NODE_ENV === "development") {
          // Only log in development
          console.log(
            "Token after login:",
            localStorage.getItem("access_token") || "User not logged in"
          );
          console.log("User:", data.user);
        }
      }
    } catch (error) {
      setLoggedIn(false);
      if (error && error.status === 401) {
        console.error("Unauthorized: User not logged in");
      } else {
        console.error("Error checking login status:", error);
      }
    }
  };

  useEffect(() => {
    checkLoggedInStatus();
    fetchUserCart();
    // eslint-disable-next-line
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/logout`,
        {
          method: "POST",
          credentials: "include", // Include cookies in the request
        }
      );
      if (response.status === 200) {
        // Clear the cart key from local storage
        localStorage.removeItem("cart");
        // Clear the access_token from local storage
        localStorage.removeItem("access_token");
        setLoggedIn(false);
        window.location.href = "/login";
      } else {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error("Error logging out:", error);
      setLoggedIn(false);
    }
  };

  const { state } = useContext(Context);

  const { cart } = state;
  let itemCount = 0;

  for (const [key] of Object.entries(cart)) {
    itemCount = itemCount + cart[key].quantity;
  }

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <>
      <nav
        className="navbar sticky-top bg-dark navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="../../favicon.png"
              alt=""
              style={{ height: 30, width: 30 }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/about">
                About Us
              </a>
              <a className="nav-link" href="/store">
                Store
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
              {loggedIn ? (
                <>
                  <li
                    className={
                      isMobile
                        ? "nav-item dropend"
                        : "nav-item dropstart position-absolute end-0 mx-5 px-2"
                    }
                    id="profileIcon"
                  >
                    <span
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/myOrders">
                          My Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/accountSettings">
                          Account Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        {
                          // eslint-disable-next-line
                        }
                        <a className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <a
                  className="nav-link position-absolute end-0 mx-5"
                  href="/login"
                  id="loginText"
                >
                  Login/SignUp
                </a>
              )}
              <a
                className={
                  isMobile
                    ? "nav-link position-absolute end-0 me-2 mt-2"
                    : "nav-link position-absolute end-0 ms-3"
                }
                href="/cart"
              >
                <span className="border border-3 rounded p-1 me-1">
                  {itemCount || 0}
                </span>
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
