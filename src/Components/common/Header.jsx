import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo.png";
import { theme } from "../../Colors/color";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(false);
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
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 36, height: 36 }}
              />
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
