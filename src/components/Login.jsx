import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Navigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change initial value to false
  const [profile, setProfile] = useState(null); //for google authentication


  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Login attempt with email:", email);

    const response = await fetch('http://localhost:8080/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      console.log("Logged in");
      setIsLoggedIn(true); // Set isLoggedIn to true on successful login
    } else {
      console.error('Login failed');
    }

  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Google Login Success:', codeResponse);
      fetchGoogleProfile(codeResponse.access_token);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const fetchGoogleProfile = async (accessToken) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json'
        }
      });
      setProfile(response.data);
      console.log('Google Profile:', response.data);
      await handleGoogleLogin(response.data);

      setIsLoggedIn(true); // Set logged-in status
    } catch (error) {
      console.error('Error fetching Google profile:', error);
    }
  };
  const handleGoogleLogin = async (googleUser) => {
    // Send the Google user data to your backend for authentication
    const response = await fetch('http://localhost:8080/api/v1/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: googleUser.email,
        name: googleUser.name,
        // Add any other necessary fields
      })
    });

    if (response.ok) {
      console.log("Google user authenticated");
      // Set any additional user state as needed
    } else {
      console.error('Google login failed');
    }
  };

  const logOut = () => {
    googleLogout();
    setProfile(null);
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Navigate to="/congo" />;
  }

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
          value={email} // Value is bound to state
          onChange={(e) => setEmail(e.target.value)} // Updates state on change
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
          value={password} // Bind password field as well
          onChange={(e) => setPassword(e.target.value)} // Update password state
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
            onClick={login}
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
