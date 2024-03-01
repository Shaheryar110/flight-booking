import React from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { Box, Typography } from "@mui/material";
import AdminDashboard from "../../Components/common/AdminDashboard";
const Index = () => {
  return (
    <>
      <AdminDashboard>
        <Box sx={style.bg}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100%",
              backdropFilter: "blur(7px)",
            }}
          ></div>
          <Box sx={{ position: "relative" }}>
            <Typography>Add Flights</Typography>
          </Box>
        </Box>
      </AdminDashboard>
    </>
  );
};

export default Index;
const style = {
  bg: {
    position: "relative",
    display: "flex",
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
  },
};
