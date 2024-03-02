import React from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { Box, Typography } from "@mui/material";
import AdminDashboard from "../../Components/common/AdminDashboard";
const Index = () => {
  return (
    <>
      <AdminDashboard>
        <Box sx={style.bg}>
     
         
            <Typography>View Flights</Typography>
     
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
