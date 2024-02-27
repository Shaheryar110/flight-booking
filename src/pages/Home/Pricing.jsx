import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../Colors/color";

const Pricing = () => {
  const Data = [
    {
      city: "New York",
      price: "$1500",
    },
    {
      city: "Maldives",
      price: "$1500",
    },
    {
      city: "Sri Lanka",
      price: "$1500",
    },
    {
      city: "Nepal",
      price: "$1500",
    },
    {
      city: "Sinagpore",
      price: "$1500",
    },
    {
      city: "Thailand",
      price: "$1500",
    },
    {
      city: "Nepal",
      price: "$1500",
    },
    {
      city: "Sinagpore",
      price: "$1500",
    },
    {
      city: "Thailand",
      price: "$1500",
    },
  ];
  return (
    <Box sx={style.paret}>
      <Container sx={{ maxWidth: { lg: "1400px" } }}>
        <Typography
          sx={style.heading}
          data-aos="flip-left"
          data-aos-offset="1000"
        >
          We Provide Affordable Prices
        </Typography>
        <Typography sx={style.desc} data-aos="flip-left">
          Well educated, intellectual people, especially scientists at all times
          demonstrate considerably.
        </Typography>
        <Grid container columnSpacing={5} sx={{ marginTop: "4rem" }}>
          <Grid item lg={4} data-aos="zoom-in">
            <Typography sx={style.pkgHeading}>Cheap Pakages</Typography>
            {Data.map((ite, index) => {
              return (
                <>
                  <Box sx={style.flexBox} key={index}>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        opacity: 0.7,
                      }}
                    >
                      {ite.city}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {ite.price}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Grid>
          <Grid item lg={4} data-aos="zoom-in">
            <Typography sx={style.pkgHeading}>Luxury Pakages</Typography>
            {Data.map((ite, index) => {
              return (
                <>
                  <Box sx={style.flexBox} key={index}>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        opacity: 0.7,
                      }}
                    >
                      {ite.city}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {ite.price}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Grid>
          <Grid item lg={4} data-aos="zoom-in">
            <Typography sx={style.pkgHeading}>Camping Pakages</Typography>
            {Data.map((ite, index) => {
              return (
                <>
                  <Box sx={style.flexBox} key={index}>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontSize: "18px",
                        opacity: 0.7,
                      }}
                    >
                      {ite.city}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "poppins",
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      {ite.price}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
const style = {
  paret: {
    paddingY: "5rem",
  },
  heading: {
    fontSize: "36px",
    fontFamily: "poppins",
    opacity: 0.8,
    fontWeight: 700,
    textAlign: "center",
  },
  desc: {
    textAlign: "center",
    opacity: 0.7,
    fontSize: "18px",
  },
  pkgHeading: {
    textAlign: "center",
    borderBottom: `2px solid ${theme.secondary}`,
    paddingBottom: "20px",
    marginBottom: "20px",
    fontSize: "28px",
    fontWeight: 600,
    fontFamily: "poppins",
    opacity: 0.7,
  },
  flexBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItms: "Center",
    justifyContent: "space-between",
    paddingY: "6px",
    paddingX: "5px",
    transition: "all ease-out 0.2s",
    ":hover": {
      backgroundColor: "#E5E1DA",
    },
  },
};
