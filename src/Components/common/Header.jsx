import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { theme } from "../../Colors/color";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { Logout } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Config";
import toast from "react-hot-toast";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [isShow, setisShow] = useState(false);
  const [user, setUser] = useState();
  const redirection = () => {};
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);
  const showPopup = () => {
    setisShow(!isShow);
  };
  const Logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign Out SuccessFully");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      });
  };
  return (
    <Box sx={style.header}>
      <Container
        sx={[
          {
            maxWidth: { lg: "1400px" },
            background: scrolled
              ? theme.secondary
              : "rgba(255, 255, 255, 0.15)",
          },
          style.mainMenu,
        ]}
      >
        <Box sx={style.row}>
          <Box sx={style.logoBox}>
            {/* <img src={logo} style={{ width: "145px", height: "30px" }} /> */}
            <Typography
              sx={{ color: "white", fontSize: "30px", fontWeight: 600 }}
            >
              LOGO
            </Typography>
          </Box>
          <Box sx={style.nav}>
            <Typography sx={style.color}>Home</Typography>
            <Typography sx={style.color}>Customer</Typography>
            <Typography sx={style.color}>Admin</Typography>
            {user ? (
              <Box sx={{ position: "relative" }}>
                <Avatar
                  alt={user.displayName}
                  src={user.displayName}
                  onClick={() => showPopup()}
                  sx={{ width: 36, height: 36, cursor: "pointer" }}
                />
                {isShow && (
                  <Box
                    sx={{
                      width: "130px",
                      height: "50px",
                      borderRadius: "10px",
                      position: "absolute",
                      background: "white",
                      boxShadow: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      top: "110%",
                    }}
                  >
                    <Typography
                      onClick={() => Logout()}
                      sx={[{ color: "black !important" }, style.color]}
                    >
                      Logout
                    </Typography>
                  </Box>
                )}
              </Box>
            ) : (
              <>
                <Typography onClick={() => redirection()} sx={style.color}>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/Login"
                  >
                    Login/SignUp
                  </Link>
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
const style = {
  header: {
    position: "fixed",
    left: 0,
    top: 30,
    right: 0,
    transition: "all 0.5s",
    zIndex: 997,
  },
  mainMenu: {
    paddingBottom: "20px",
    paddingTop: "20px",
    // background: "rgba(255, 255, 255, 0.15)",
    paddingLeft: 15,
    paddingRight: 15,
    transition: "all ease-out 0.3s",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoBox: {
    paddingLeft: "15px",
  },
  nav: {
    paddingRight: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  color: {
    color: "white",
    fontFamily: "Poppins",
    cursor: "pointer",
    transition: "all ease-out 0.5s",
    ":hover": {
      color: theme.secondary,
    },
  },
};
