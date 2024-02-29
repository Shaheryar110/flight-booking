import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ResponsiveDrawer from "../../Components/common/DashboardSidebar";
import bg from "../../Assets/Images/bg.jpeg";
import { Box } from "@mui/material";
const Index = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    if (!currentUser) {
      navigate("/Login");
    }
  }, [currentUser]);
  return (
    <>
      <ResponsiveDrawer>
        <Box sx={style.bg}>
          <h1>Customer</h1>
        </Box>
      </ResponsiveDrawer>
    </>
  );
};

export default Index;
const style = {
  bg: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
  },
};
