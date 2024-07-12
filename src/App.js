import { useState } from "react";
import './App.css';
import Login from "./components/Login.jsx"
import SignUp from './components/SignUp.jsx';
import Navbar from './components/Navbar.jsx';
import MuiNavbar from './components/MuiNavbar.jsx';
import Test from './components/test.jsx';
import ThreeSeg from './components/ThreeSeg.jsx'
import Sidebar from './components/SideBar.jsx';
import Rightbar from './components/RightBar.jsx';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavbarNew from './components/NavbarNew'


function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <div style={{ paddingTop: '80px' }}>
      
     
      {/* <SignUp/> */}
      {/* <Navbar/> */}
      {/* <MuiNavbar/> */}
       {/* <Login/> */}
       <NavbarNew/>
       <ThreeSeg />
       {/* <Test/> */}
       {/* <Sidebar/>
       <Rightbar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Login/>
          <Rightbar />
        </Stack> */}


    </div>
  );
}

export default App;
