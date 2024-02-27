import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../../Assets/Images/hero-bg.jpg";
import Header from "../../Components/common/Header";

const Index = () => {
  return (
    <>
      <Header />
      <Box sx={style.bannerSection}>
        <Box sx={style.bannerOverlay}></Box>
        <Container sx={style.container}>
          <Box>
            <Typography sx={style.minorText}>
              Away from monotonous life
            </Typography>
            <Typography sx={style.mainText}>Magical Travel</Typography>
            <Typography
              sx={{
                color: "white",
                width: "50%",
                fontSize: 17,
                marginBottom: 2,
              }}
            >
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </Typography>
            <Button variant="contained" sx={style.btn}>
              GET STARTED
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Index;
const style = {
  bannerSection: {
    position: "relative",
    display: "block",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
  },
  bannerOverlay: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    background: "rgba(4, 9, 30, 0.4)",
  },
  container: {
    maxWidth: { lg: "1400px" },
    height: "919px",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  minorText: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 17,
    letterSpacing: 2,
    color: "white",
    fontFamily: "Poppins",
  },
  mainText: {
    fontSize: 60,
    textTransform: "uppercase",
    color: "white",
    fontWeight: 800,
    fontFamily: "Poppins",
  },
  btn: {
    fontWeight: 600,
    fontSize: 15,
    paddingX: "20px",
    paddingY: "10px",
    fontFamily: "Poppins",
  },
};
