import Home from "../src/pages/Home";
import Customers from "../src/pages/Customers";
import Admin from "../src/pages/Admin";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import { Toaster } from "react-hot-toast";
AOS.init();
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
