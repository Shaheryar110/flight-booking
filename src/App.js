import Home from "../src/pages/Home";
import Customers from "../src/pages/Customers";
import Admin from "../src/pages/Admin";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Customers" element={<Customers />} />
    </Routes>
  );
}

export default App;
