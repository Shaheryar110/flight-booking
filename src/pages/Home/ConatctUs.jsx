import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DeckIcon from "@mui/icons-material/Deck";
import { theme } from "../../Colors/color";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const ConatctUs = () => {
  return (
    <>
      <Box sx={style.paret} data-aos="fade-up" data-aos-duration="1000">
        <Container sx={{ maxWidth: { lg: "1400px" } }}>
          <Typography sx={style.heading}>Conatct Us</Typography>
          <Grid container columnSpacing={5} sx={{ marginTop: "5rem" }}>
            <Grid item lg={4}>
              <Box sx={style.addressBox}>
                <DeckIcon sx={{ color: theme.secondary, fontSize: 50 }} />
                <Box>
                  <Typography sx={style.main}>Binghamton, New York</Typography>
                  <Typography sx={style.mini}>
                    123 Hinkle Deegan Lake Road
                  </Typography>
                </Box>
              </Box>
              <Box sx={style.addressBox}>
                <LocalPhoneIcon sx={{ color: theme.secondary, fontSize: 50 }} />
                <Box>
                  <Typography sx={style.main}>00 (958) 9865 562</Typography>
                  <Typography sx={style.mini}>
                    Mon to Fri 9am to 6 pm
                  </Typography>
                </Box>
              </Box>
              <Box sx={style.addressBox}>
                <MarkunreadIcon sx={{ color: theme.secondary, fontSize: 50 }} />
                <Box>
                  <Typography sx={style.main}>support@xyz.com</Typography>
                  <Typography sx={style.mini}>
                    Send us your query anytime!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <TextField
                label="Enter Your Name"
                variant="outlined"
                sx={{ marginBottom: "15px", width: "100%" }}
              />
              <TextField
                label="Enter Your Address"
                variant="outlined"
                sx={{ marginBottom: "15px", width: "100%" }}
              />
              <TextField
                label="Enter Your Subject"
                variant="outlined"
                sx={{ marginBottom: "15px", width: "100%" }}
              />
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
              }}
            >
              <TextField
                label="Message"
                multiline
                rows={7}
                defaultValue="Enter Message"
                style={{ width: "100%" }}
              />
              <Button variant="contained" sx={style.btn}>
                SEND MESSAGE
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ConatctUs;
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
  addressBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    gap: "20px",
    marginBottom: "40px",
  },
  main: {
    fontFamily: "poppins",
    opacity: 0.8,
    fontSize: "19px",
    fontWeight: 600,
    color: theme.secondary,
  },
  mini: {
    color: theme.secondary,
    fontFamily: "poppins",
    opacity: 0.6,
    fontSize: "17px",
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
