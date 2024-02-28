import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { Link } from "react-router-dom";
import { SignUpFirebase } from "../../Services/Authentication";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Colors/color";

const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (key, val) => {
    setFormData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const onSubmit = () => {
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.phone == "" ||
      formData.password == "" ||
      formData.confirmPassword == ""
    ) {
      toast.error("Fill All Feilds");
    } else {
      SignUpFirebase(formData).then(() => {
        toast.success("Registered Successfully");
        navigate("/");
      });
    }
  };

  return (
    <>
      <Box sx={style.bg}>
        <Box sx={style.LoginBox}>
          <Typography sx={style.heading}>Sign Up</Typography>
          <div class="section">
            <input
              className="input"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter Your Full Name"
              required
            />
            <label class="label" html="name">
              Enter Your Full Name
            </label>
            <div class="error"></div>
          </div>
          {/* <TextField
            label="Enter Your Full Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => handleOnChange("name", e.target.value)}
            sx={{
              marginBottom: "15px",
              width: "100%",
              background: "transparent",
            }}
          /> */}
          <div class="section">
            <input
              className="input"
              name="name"
              id="name"
              value={formData.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
              type="text"
              placeholder="Enter Your Email"
              required
            />
            <label class="label" html="name">
              Enter Your Email"
            </label>
            <div class="error"></div>
          </div>
          {/* <TextField
            label="Enter Your Email"
            variant="outlined"
            value={formData.email}
            onChange={(e) => handleOnChange("email", e.target.value)}
            sx={{
              marginBottom: "15px",
              width: "100%",
              background: "transparent",
            }}
          /> */}
          <div class="section">
            <input
              className="input"
              name="name"
              id="name"
              value={formData.phone}
              onChange={(e) => handleOnChange("phone", e.target.value)}
              type="text"
              placeholder="Enter Your Phone"
              required
            />
            <label class="label" html="name">
              Enter Your Phone
            </label>
            <div class="error"></div>
          </div>
          {/* <TextField
            label="Enter Your Phone"
            variant="outlined"
            value={formData.phone}
            onChange={(e) => handleOnChange("phone", e.target.value)}
            sx={{
              marginBottom: "15px",
              width: "100%",
              background: "transparent",
            }}
          /> */}
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
              Enter Your Password
            </label>
            <div class="error"></div>
          </div>
          {/* <TextField
            label="Enter Your Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleOnChange("password", e.target.value)}
            variant="outlined"
            sx={{ marginBottom: "15px", width: "100%" }}
          /> */}
          <div class="section">
            <input
              className="input"
              name="name"
              id="name"
              value={formData.confirmPassword}
              onChange={(e) =>
                handleOnChange("confirmPassword", e.target.value)
              }
              type="password"
              placeholder="Confirm Password"
              required
            />
            <label class="label" html="name">
              Confirm Password
            </label>
            <div class="error"></div>
          </div>
          {/* <TextField
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleOnChange("confirmPassword", e.target.value)}
            type="password"
            variant="outlined"
            sx={{ marginBottom: "15px", width: "100%" }}
          /> */}
          <Button variant="contained" sx={style.btn} onClick={onSubmit}>
            LOG IN
          </Button>
          <Typography sx={style.slogan}>
            Already have an account?
            <Link
              to={"/Login"}
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

export default SignUp;
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
    width: "20%",
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