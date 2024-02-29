import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import bg from "../../Assets/Images/bg.jpeg";
import Header from "../../Components/common/Header";
import Pricing from "./Pricing";
import ConatctUs from "./ConatctUs";
import Footer from "../../Components/common/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Box sx={style.bannerSection}>
        <Box sx={style.bannerOverlay}></Box>
        <Container sx={style.container}>
          <Box
            sx={{
              display: {
                md: "block",
                xs: "flex",
              },
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={style.minorText}
              data-aos="fade-right"
              data-aos-offset="100"
            >
              Away from monotonous life
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-offset="300"
              sx={style.mainText}
            >
              Magical Travel
            </Typography>
            <Typography
              sx={{
                color: "white",
                width: { md: "50%", sx: "100%" },
                fontSize: 17,
                marginBottom: 2,
                textAlign: { md: "left", xs: "center" },
              }}
              data-aos="fade-right"
              data-aos-offset="200"
            >
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price. You may see some for as low
              as $.17 each.
            </Typography>
            <Button
              data-aos="fade-right"
              data-aos-offset="200"
              variant="contained"
              sx={style.btn}
            >
              GET STARTED
            </Button>
          </Box>
        </Container>
      </Box>
      {/* <-------------Pricing Section Start------------------> */}
      <Pricing />
      {/* <-------------Pricing Section End------------------> */}
      {/* <-------------Conatct Us Section Start------------------> */}
      <ConatctUs />
      {/* <-------------Conatct Us Section End------------------> */}
      <Footer />
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
    fontSize: { md: 60, sm: 40, xs: 30 },
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
