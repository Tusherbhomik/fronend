import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import './App.css';
import Login from "./components/Login.jsx"
import SignUp from './components/SignUp.jsx';
import Navbar from './components/Navbar.jsx';
import MuiNavbar from './components/MuiNavbar.jsx';
import ThreeSeg from './components/ThreeSeg.jsx'
import Sidebar from './components/SideBar.jsx';
import Rightbar from './components/RightBar.jsx';
import NavbarNew from './components/NavbarNew'
import Congo from './components/Congratulations.jsx'
import MiddleApp from "./MiddleApp.jsx";
import Check from "./Check.jsx"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiddleApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/congo" element={<Congo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/check" element={<Check />} />
       
      </Routes>
    </Router>
  );
};

export default App;
