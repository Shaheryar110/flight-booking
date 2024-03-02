import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import bg from "../../Assets/Images/bg.jpeg";
import { theme } from "../../Colors/color";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminLogin, LoginFirebase } from "../../Services/Authentication";
import AdminDashboard from "../../Components/common/AdminDashboard";
import { AddAirCraft, AddFlight } from "../../Services/AddData";
import { getData } from "../../Services/ReadData";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const Index = () => {
 
 const [airport,setAirport]=useState([])
  const [aircraft,setAircraft]=useState([])

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${(now.getMonth() + 1)}`.padStart(2, '0'); // Adding 1 as months are zero-indexed
  const day = `${now.getDate()}`.padStart(2, '0');
  const hours = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
const [formData, setFormData] = useState({
  arrivalTimeDate:getCurrentDateTime(),
  departureTimeDate:getCurrentDateTime(),
  aircraft:"",
  arrivalAirport:"",
  departureAirport:""
});
  const handleOnChange = (key, val) => {
    setFormData((prev) => ({
      ...prev,
      [key]: val,
    }));
  };
  const onSubmit = async () => {
    
    const { arrivalAirport, departureAirport, arrivalTimeDate, departureTimeDate, aircraft } = formData;
    if (arrivalAirport === "" || departureAirport === "" || arrivalTimeDate === "" || departureTimeDate === "" || aircraft === "") {
      toast.error("Fill All Fields");
      console.log("Fill all fields");
      return;
    }
try {
  const {res}=await AddFlight(formData)
  if(res===true){
    toast.success("Flight Add successfully");
    setFormData({
      arrivalTimeDate:getCurrentDateTime(),
      departureTimeDate:getCurrentDateTime(),
      aircraft:"",
      arrivalAirport:"",
      departureAirport:""
    })
  }else{
    toast.error("Add Flight Error");
  }
} catch (error) {
  console.log(error);
}
    
   
  };

  const getsData=async()=>{
    try {
      const airportData=await getData("airports")
      console.log(airportData,"airportData");
      setAirport(airportData)
const aircraftData=await getData("aircrafts")
console.log(aircraftData,"aircraftData");
setAircraft(aircraftData)
    } catch (error) {
      console.log("error",error);
    }

  }
  useEffect(()=>{
    getsData()
  },[

  ])
  useEffect(()=>{
    console.log(formData,"formData");
  },[formData])
  return (
    <>
      <AdminDashboard>
        <Box sx={style.bg}>
         
          
        <Box sx={style.LoginBox}>
          <Typography sx={style.heading}>
            Add Aircraft
          </Typography>
          <FormControl fullWidth sx={styles.formControl}>
  <InputLabel id="demo-simple-select-label">Add Aircraft</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.aircraft.name}
          label="Add Aircraft"
          fullWidth
          onChange={(e)=>handleOnChange("aircraft",e.target.value)}
          sx={styles.select}
        >
          {aircraft?.map((data)=>(
  <MenuItem value={data}>{data.name}</MenuItem>
          ))}
        
          
        </Select>
        </FormControl>
          <FormControl fullWidth sx={styles.formControl}>
  <InputLabel id="demo-simple-select-label">Add Arival Airport</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.arrivalAirport.name}
          label="Add Arival Airport"
          fullWidth
          onChange={(e)=>handleOnChange("arrivalAirport",e.target.value)}
          sx={styles.select}
        >
          {airport?.map((data)=>(
  <MenuItem value={data}>{data.name}</MenuItem>
          ))}
        
          
        </Select>
        </FormControl>
        

          <div class="section">
          
<input type="datetime-local" id="birthday" name="birthday" className="input" value={formData.arrivalTimeDate}  onChange={(e)=>handleOnChange("arrivalTimeDate",e.target.value)}/>
<label  className="label">Add Arrival Time & Date</label>
            
          </div>


          <FormControl fullWidth sx={styles.formControl}>
  <InputLabel id="demo-simple-select-label">Add Departure Airport</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.departureAirport.name}
          label="Add Departure Airport"
          fullWidth
          onChange={(e)=>handleOnChange("departureAirport",e.target.value)}
          sx={styles.select}
        >
          {airport?.map((data)=>(
  <MenuItem value={data}>{data.name}</MenuItem>
          ))}
        
          
        </Select>
        </FormControl>
        

          <div class="section">
          
<input type="datetime-local" id="birthday" name="birthday" className="input" value={formData.departureTimeDate}  onChange={(e)=>handleOnChange("departureTimeDate",e.target.value)}/>
<label  className="label">Add Departure Time & Date</label>
            
          </div>

          <Button variant="contained" sx={style.btn} onClick={onSubmit}>
            ADD
          </Button>
        
        </Box>
         
        </Box>
      </AdminDashboard>
    </>
  );
};

export default Index;
const style = {
  bg: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
  },
  LoginBox: {
    // height: "50%",
    width: { lg: "40%", md: "40%", sm: "80%", xs: "100%" },
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
const styles = {
  formControl: {
    '& .MuiInputLabel-root': {
      color: 'white !important', // Label color
    },
    marginBottom:"1.5rem"
  },
  select: {
    '& .MuiOutlinedInput-input': {
      color: 'white', // Text color
    },
    '& .MuiInputLabel-outlined': {
      color: 'white !important', // Label color
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white !important', // Border color
      borderRadius:"7px"
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white !important', // Hover border color
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white !important', // Focused border color
    },
    '& .MuiSelect-icon': {
      color: 'white', // Dropdown icon color
    },
    '& .MuiListItem-root': {
      color: 'white', // Text color in options
    },
    input: {
      color: 'white', // Text color
      border: '2px solid white', // Border color
      borderRadius: '4px', // Border radius
      padding: '8px', // Padding
      width: '100%', // Width
      boxSizing: 'border-box' // Ensure padding and border are included in width
    },
    wrapper: {
      width: '100%', // Set full width
      marginBottom: '16px' // Add margin bottom for spacing
    }
  },
};