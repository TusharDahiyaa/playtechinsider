const setAdminRole = async (userId) => {
  try {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await fetch(
      `${process.env.REACT_APP_BASEURL}/api/setAdminRole/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`, // Include the user's JWT
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.status === 400 || errorData.status === 403) {
        throw new Error(
          `Failed to set user role as admin : ${errorData.error}`
        );
      } else if (errorData.status === 401) {
        console.log("Returning success message");
        return "User is already an Admin.";
      }
    }

    if (response.ok) {
      if (response.status === 200) {
        console.log("Returning success message");
        return "User role changed successfully.";
      } else if (response.status === 202) {
        console.log("Returning success message");
        return "User is already an Admin.";
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default setAdminRole;
