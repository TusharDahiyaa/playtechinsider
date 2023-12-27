import React, { useEffect, useState } from "react";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

export default function AccountSettings() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    isLoading: false,
  });
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/user/details`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUserDetails(data.userDetails);
      } else {
        console.error("Error fetching user details:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleSaveName = async () => {
    try {
      setUserDetails({ ...userDetails, isLoading: true });
      Loading.dots("Updating information");

      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/user/update-name`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: userDetails.name }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setUserDetails({
          ...data.userData,
          isLoading: false,
        });
        Loading.remove();
        setIsEditingName(false);
      } else {
        console.error("Error updating name:", response.statusText);
        setError(data.error);
      }
    } catch (error) {
      console.error("Error updating name:", error);
      setError(error.message);
    } finally {
      Loading.remove();
      setUserDetails({ ...userDetails, isLoading: false });
    }
  };

  const handleSavePhoneNumber = async () => {
    try {
      setUserDetails({ ...userDetails, isLoading: true });
      Loading.dots("Updating information");
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/user/update-phone-number`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: userDetails.phoneNumber }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUserDetails({
          ...data.userData,
          isLoading: false,
        });
        setIsEditingPhoneNumber(false);
        Loading.remove();
      } else {
        console.error("Error updating phone number:", response.statusText);
        setError(data.error);
        Loading.remove();
        setUserDetails({
          ...userDetails,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error updating phone number:", error);
      setError(error.message);
      Loading.remove();
      setUserDetails({
        ...userDetails,
        isLoading: false,
      });
    }
  };

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

  const handleSubmitPasswordChange = async (event) => {
    event.preventDefault();

    try {
      Loading.dots("Updating information");
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/user/change-password`,
        {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentPassword,
            newPassword,
            confirmPassword,
          }),
        }
      );

      if (response.ok) {
        setIsChangingPassword(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        // Display a success message to the user
        console.log("Password changed successfully");
        Report.success(
          "Password Changed Successfully.",
          "Please login with your new password",
          "Okay",
          () => {
            handleLogout();
          }
        );
        Loading.remove();
      } else {
        const data = await response.json();
        console.error("Error changing password:", response.statusText);
        Loading.remove();
        setError(data.error);
        setUserDetails({
          ...userDetails,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Error changing password:", error);
      Loading.remove();
      setUserDetails({
        ...userDetails,
        isLoading: false,
      });
      setError(error.message);
    }
  };

  const handlePasswordChange = () => {
    setIsChangingPassword(true);
  };

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const isMobile = window.matchMedia("(max-width: 575px)").matches;

  return (
    <div className="container my-5 text-light">
      <h1 className="text-center my-4 border border-5 p-2">Account Settings</h1>

      <div
        className="container"
        style={isMobile ? { fontSize: "0.95rem" } : {}}
      >
        {userDetails && (
          <>
            <div className="my-2 bg-dark p-3 my-2 mx-2">
              <span className="fw-bold me-2">Name :</span> {userDetails.name}{" "}
              {isEditingName ? (
                <button
                  className="btn btn-secondary btn-sm float-end"
                  onClick={() => setIsEditingName(false)}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className="btn btn-outline-light btn-sm float-end"
                  onClick={() => setIsEditingName(true)}
                >
                  Edit
                </button>
              )}
              {isEditingName && (
                <div className="my-3 mx-5">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {userDetails.nameError && (
                    <p className="text-danger">{userDetails.nameError}</p>
                  )}
                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={handleSaveName}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
            <div className="my-2 bg-dark p-3 my-2 mx-2">
              <span className="fw-bold me-2">Email :</span> {userDetails.email}
            </div>

            <div className="my-2 bg-dark p-3 my-2 mx-2">
              <span className="fw-bold me-2">Phone Number :</span>
              {userDetails.phoneNumber || "Enter your phone number"}
              {isEditingPhoneNumber ? (
                <button
                  className="btn btn-secondary btn-sm float-end"
                  onClick={() => setIsEditingPhoneNumber(false)}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className="btn btn-outline-light btn-sm float-end"
                  onClick={() => setIsEditingPhoneNumber(true)}
                >
                  Edit
                </button>
              )}
              {isEditingPhoneNumber && (
                <div className="my-2 mx-5">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={userDetails.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {error && <p className="text-danger">{error}</p>}
                  <button
                    className="btn btn-primary btn-sm mt-2"
                    onClick={handleSavePhoneNumber}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="my-2 bg-dark p-3 my-2 mx-2">
              <span className="fw-bold me-2">Password </span>
              {isChangingPassword ? (
                <form onSubmit={handleSubmitPasswordChange}>
                  <div className="my-3 mx-5">
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Current Password"
                      className="form-control"
                    />
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="New Password"
                      className="form-control mt-2"
                    />
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      className="form-control mt-2"
                    />
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-primary mt-3 me-2">
                      Change Password
                    </button>
                    <button
                      className="btn btn-secondary mt-3"
                      onClick={() => setIsChangingPassword(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  className={
                    isMobile
                      ? "btn btn-light btn-sm my-2"
                      : "btn btn-light btn-sm"
                  }
                  onClick={handlePasswordChange}
                >
                  Change Password
                </button>
              )}
              <button
                className="btn btn-outline-light btn-sm ms-2"
                style={isMobile ? { width: "100%" } : {}}
                onClick={() => (window.location.href = "/forgetpassword")}
              >
                Forgot Password ?
              </button>
            </div>
          </>
        )}
        {userDetails.isLoading && Loading.dots("Loading user information")}
      </div>

      {/* Modals for password reset, username change, and phone number change */}
    </div>
  );
}
