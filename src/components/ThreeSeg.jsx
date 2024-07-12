import * as React from 'react';
import { Container, Grid ,Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './SideBar';
import Login from './Login';
import Rightbar from './RightBar';



const theme = createTheme({
  palette: {
    background: {
      default: '#000000',  // Set background color to black
    },
  },
});


function ThreeSegmentLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={7}>
          <Login/>
        </Grid>
        <Grid item xs={3}>
          <Rightbar/>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  );
}

export default ThreeSegmentLayout;
