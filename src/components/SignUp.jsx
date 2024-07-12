import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const handleSignUp = async (event) => {

        event.preventDefault();
        console.log(firstName);

        const response = await fetch('http://localhost:8080/api/v1/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName,lastName,email,password })
            
        });

        if (response.ok) {
            console.log("GGG");
            const data = await response.json();
            const token = data.token;
            console.log('JWT Token:', token);

            // Store the token in localStorage (or sessionStorage)
            localStorage.setItem('jwtToken', token);
            // Redirect to login page or handle successful sign-up
        } else {
            console.error('Sign-up failed');
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
                onSubmit={handleSignUp} // Form's onSubmit event
            >
                <Typography variant="h5" mb={2}>
                    Sign Up
                </Typography>

                <TextField
                    label="FirstName"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    id="firstname" // Unique identifier
                    name="firstName" // Used for form submission
                    onChange={(event) => {
                        if (event.target.value.length > 2) {
                          console.log('First Name updated:', event.target.value);
                        }
                        setFirstName(event.target.value);
                      }}
                />

                <TextField
                    label="LastName"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    id="lastName" // Unique identifier
                    name="lastName" // Used for form submission
                    onChange={(event) => {
                        console.log(event.target.value);
                        setLastName(event.target.value);
                      }}
                    
                />

                <TextField
                    label="Email"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    id="email" // Unique identifier
                    name="email" // Used for form submission
                    type="email"
                    onChange={(event) => {
                        console.log(event.target.value);
                        setEmail(event.target.value);
                      }}
                />

                <TextField
                    label="Password"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    id="password" // Unique identifier
                    name="pasword" // Used for form submission
                    type="password"
                    onChange={(event) => {
                        console.log(event.target.value);
                        setPassword(event.target.value);
                      }}
                />

                <TextField
                    label="Confirm Password"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    required
                    type="password"
                />

                {/* Optional fields */}

                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }} 
                >
                    Sign Up
                </Button>
                

                {/* Social login buttons (optional) */}
                {/* ... */}

                <Typography variant="body2" mt={2}>
                    <FormControlLabel control={<Checkbox value="terms" color="primary" />} label="I agree to the terms and conditions" />
                </Typography>

                <Typography variant="body2" mt={2}>
                    Already have an account? <Link href="/login">Log in</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default Signup;
