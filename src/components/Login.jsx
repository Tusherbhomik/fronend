import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

  const [email,setEmail] =useState('');
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Login attempt with email:", email);

    try {
      const response = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log('JWT Token:', token);

        // Store the token in localStorage
        localStorage.setItem('jwtToken', token);

        // Redirect or handle successful login
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <Box 
    display="flex" 
    flexDirection="column" 
    alignItems="center" 
    justifyContent="center" 
    height="100vh" 
    sx={{
      backgroundImage: `url('/LoginBg.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}

    >
      <Box 
        component="form" 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        p={3} 
        bgcolor="white" 
        borderRadius={1} 
        boxShadow={3}
        onSubmit={handleLogin}
      >
        <Typography variant="h5" mb={2}>LOGIN</Typography>
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2, bgcolor: '#ff4081' }}
        >
          LOGIN
        </Button>
        
        <Divider sx={{ width: '100%', mb: 2 }}>Or login with</Divider>
        
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ mr: 1 }}
          >
            Facebook
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ ml: 1 }}
          >
            Google
          </Button>
        </Box>
        
        <Typography variant="body2" mt={2}>
          Not a member? <a href="/signup">Sign up now</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
