import React, { useContext, useEffect,useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ResponsiveDrawer from "../../Components/common/DashboardSidebar";
import bg from "../../Assets/Images/bg.jpeg";
import { Box ,Typography,Grid} from "@mui/material";
import { userBookFlights } from "../../Services/ReadData";
import { theme } from "../../Colors/color";
const Index = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [flights, setFlight] = useState();
  useEffect(() => {
    if (!currentUser) {
      navigate("/Login");
    }
    else{
        userBookFlights(currentUser.uid).then((data)=>{setFlight(data);})
    }
  }, [currentUser]);
  useEffect(()=>{console.log(flights)},[flights])
  return (
    <>
      <ResponsiveDrawer>
      <Box sx={style.bg}>
          <Typography sx={style.heading}>Booked Flights </Typography>
          {flights &&
            flights?.map((item, index) => {
              const dateTimeA = new Date(item.flightInfo.arrivalTimeDate);

              // Format date
              const formattedDateA = dateTimeA.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });

              // Format time
              const formattedTimeA = dateTimeA.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });
              const dateTimeD = new Date(item.flightInfo.departureTimeDate);

              // Format date
              const formattedDateD = dateTimeD.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });

              // Format time
              const formattedTimeD = dateTimeD.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              });
              return (
                <Box sx={style.LoginBox} key={index}>
                  <Grid container spacing={5}>
                    <Grid item lg={4} sm={6} xs={12}>
                      <Typography sx={style.static}>
                        Air Craft Information
                      </Typography>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>Air Craft Name</Typography>
                        <Typography sx={style.info}>
                          {item?.flightInfo?.aircraft?.name}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>
                          Air Craft Booked Seats
                        </Typography>
                        <Typography sx={style.info}>
                          {item?.seats}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                      <Typography sx={style.static}>
                        Arrival Information
                      </Typography>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>
                          Arrival Airport Name
                        </Typography>
                        <Typography sx={style.info}>
                          {item?.flightInfo?.arrivalAirport?.name}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>
                          Arrival Airport Location
                        </Typography>
                        <Typography sx={style.info}>
                          {item?.flightInfo?.arrivalAirport?.city} /{" "}
                          {item?.flightInfo?.arrivalAirport?.country}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>Arrival Date</Typography>
                        <Typography sx={style.info}>
                          {formattedDateA}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>Arrival Time</Typography>
                        <Typography sx={style.info}>
                          {formattedTimeA}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                      <Typography sx={style.static}>
                        Departure Information
                      </Typography>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>
                          Departure Airport Name
                        </Typography>
                        <Typography sx={style.info}>
                          {item?.flightInfo.departureAirport?.name}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>
                          Departure Airport Location
                        </Typography>
                        <Typography sx={style.info}>
                          {item?.flightInfo.departureAirport?.city} /{" "}
                          {item?.flightInfo.departureAirport?.country}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>Departure Date</Typography>
                        <Typography sx={style.info}>
                          {formattedDateD}
                        </Typography>
                      </Box>
                      <Box sx={style.flexy}>
                        <Typography sx={style.info}>Departure Time</Typography>
                        <Typography sx={style.info}>
                          {formattedTimeD}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                 
                </Box>
              );
            })}
        </Box>
      </ResponsiveDrawer>
    </>
  );
};

export default Index;
const style = {
    btn: {
      fontWeight: 600,
      fontSize: 15,
      paddingX: "20px",
      paddingY: "10px",
      fontFamily: "Poppins",
      marginTop: "1rem",
      background: theme.secondary,
    },
    flexy: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    bg: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100vw",
      backgroundSize: "cover",
      backgroundImage: `url(${bg})`,
      overflowY: "scroll",
      paddingX: "1rem",
    },
    heading: {
      color: "white",
      fontSize: "30px",
      fontWeight: 700,
      textAlign: "left",
      paddingTop: "4rem",
    },
    static: {
      color: "white",
      fontSize: "20px",
      fontWeight: 600,
      textAlign: "center",
      paddingBottom: "12px",
    },
    LoginBox: {
      // height: "50%",
      width: "80%",
      borderRadius: "1rem",
      padding: "1.3rem",
      background: "rgba(0, 0, 0, 0.3)",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      display: "flex",
      marginY: "12px",
      flexDirection: "column",
    },
    info: {
      color: "white",
      fontFamily: "poppins",
    },
    waring: {
      color: "white",
      fontFamily: "poppins",
      fontSize: "13px",
      marginTop: "4px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  };