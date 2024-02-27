import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../Assets/Images/logo.png";

const Header = () => {
  return (
    <Box sx={style.header}>
      <Container sx={[{ maxWidth: { lg: "1400px" } }, style.mainMenu]}>
        <Box sx={style.row}>
          <Box sx={style.logoBox}>
            <img src={logo} style={{ width: "145px", height: "30px" }} />
          </Box>
          <Box sx={style.nav}>
            <Typography sx={style.color}>Home</Typography>
            <Typography sx={style.color}>Customer</Typography>
            <Typography sx={style.color}>Admin</Typography>
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
    background: "rgba(255, 255, 255, 0.15)",
    paddingLeft: 15,
    paddingRight: 15,
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
  },
};
