import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { theme } from "../../Colors/color";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoginFirebase } from "../../Services/Authentication";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (key, val) => {
    setFormData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };
  const onSubmit = () => {
    if (formData.email == "" || formData.password == "") {
      toast.error("Fill All Feilds");
    } else {
      LoginFirebase(formData).then(() => {
        toast.success("Registered Successfully");
        navigate("/");
      });
    }
  };
  return (
    <>
      <Box sx={style.bg}>
        <Box sx={style.LoginBox}>
          <Typography sx={style.heading}>LOG IN</Typography>
          <div class="section">
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              value={formData.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
              placeholder="Enter Your Email"
              required
            />
            <label class="label" html="name">
              Your Email
            </label>
            <div class="error"></div>
          </div>

          <div class="section">
            <input
              className="input"
              name="name"
              id="name"
              value={formData.password}
              onChange={(e) => handleOnChange("password", e.target.value)}
              type="password"
              placeholder="Enter Your Password"
              required
            />
            <label class="label" html="name">
              Your Password
            </label>
            <div class="error"></div>
          </div>

          <Button variant="contained" sx={style.btn} onClick={onSubmit}>
            LOG IN
          </Button>
          <Typography sx={style.slogan}>
            Did'nt have an account?
            <Link
              to={"/SignUp"}
              style={{ textDecoration: "none", color: theme.secondary }}
            >
              Register
            </Link>
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
    width: { lg: "20%", md: "40%", sm: "80%", xs: "100%" },
    borderRadius: "1rem",
    padding: "1.3rem",
    background: "rgba(0, 0, 0, 0.3)",
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
    fontSize: "30px",
    fontWeight: 600,
    color: "white",
    fontFamily: "poppins",
    paddingBottom: "25px",
    opacity: 0.7,
  },
  slogan: {
    width: "100%",
    textAlign: "center",
    fontSize: "17px",
    fontWeight: 600,
    color: "white",
    fontFamily: "poppins",
    paddingTop: "15px",
    opacity: 0.7,
  },
  btn: {
    fontWeight: 600,
    fontSize: 15,
    paddingX: "20px",
    paddingY: "10px",
    fontFamily: "Poppins",
    marginTop: "1rem",
    background: theme.secondary,
  },
};
