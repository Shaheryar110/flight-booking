import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { theme } from "../../Colors/color";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Box sx={style.bg}>
        <Box sx={style.LoginBox}>
          <Typography sx={style.heading}>LOG IN</Typography>
          <TextField
            label="Enter Your Email"
            variant="outlined"
            sx={{
              marginBottom: "15px",
              width: "100%",
              background: "transparent",
            }}
          />
          <TextField
            label="Enter Your Password"
            type="password"
            variant="outlined"
            sx={{ marginBottom: "15px", width: "100%" }}
          />
          <Button variant="contained" sx={style.btn}>
            LOG IN
          </Button>
          <Typography sx={style.slogan}>
            Did'nt have an account?<Link to={"/SignUp"}>Register</Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
const style = {
  bg: {
    position: "relative",
    display: "block",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
  },
  LoginBox: {
    height: "50%",
    width: "20%",
    borderRadius: "1rem",
    padding: "1.3rem",
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    backdropFilter: "blur(4px)",
    WebkitBackdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    maxWidth: { lg: "1400px" },
    height: "919px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  heading: {
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 600,
    color: "black",
    fontFamily: "poppins",
    paddingBottom: "25px",
  },
  slogan: {
    width: "100%",
    textAlign: "center",
    fontSize: "17px",
    fontWeight: 600,
    color: "black",
    fontFamily: "poppins",
    paddingTop: "15px",
  },
  btn: {
    fontWeight: 600,
    fontSize: 15,
    paddingX: "20px",
    paddingY: "10px",
    fontFamily: "Poppins",
    marginTop: "1rem",
  },
};
