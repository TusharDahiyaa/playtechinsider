import React, { useState } from "react";
import setAdminRole from "../utils/apiAdmin";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const [userId, setUserId] = useState("");
  const [userIdError, setUserIdError] = useState("");

  const handleSetAdminRole = async () => {
    if (!userId.trim()) {
      return setUserIdError("Please enter a valid user ID.");
    }

    try {
      const adminRoleChange = await setAdminRole(userId);
      console.log(adminRoleChange);
      if (adminRoleChange === "User role changed successfully.") {
        Swal.fire({
          title: "Success!",
          color: "#B31312",
          background: "#000 url(/images/pexels-adrien-olichon-2387793.jpg)",
          text: `Username "${userId}" is now an Admin.`,
          imageUrl: "/images/best-admin-meme.jpg",
          imageWidth: 350,
          imageHeight: 150,
          imageAlt: "Custom image",
        })
          .then(() => {
            setUserId("");
          })
          .then(
            // If the user clicks on 'Close', redirect to home page
            () => window.location.replace("/")
          );
      } else if (adminRoleChange === "User is already an Admin.") {
        Swal.fire({
          title: "Why you wanna give an admin more power!",
          color: "#B31312",
          background: "#000 url(/images/pexels-adrien-olichon-2387793.jpg)",
          text: `Username "${userId}" is already an Admin.`,
          imageUrl: "/images/NoneShallPass.jpg",
          imageWidth: 300,
          imageHeight: 140,
          imageAlt: "Custom image",
        }).then(() => {
          setUserId("");
        });
      }
    } catch (error) {
      console.error("Error setting admin role:", userIdError);
    }
  };

  return (
    <div className=" container text-light text-center">
      <h1 className="my-4 border border-5 p-2">Admin Dashboard</h1>
      <h4 className="mx-2">User ID:</h4>
      <input
        type="text"
        id="userId"
        className="form-control w-25 mx-auto my-2"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        autoComplete="on"
      />
      <button
        className="btn btn-outline-primary  mt-2 mb-5"
        onClick={handleSetAdminRole}
      >
        Set Admin Role
      </button>
      <br />
      {userIdError}
    </div>
  );
};

export default AdminDashboard;
