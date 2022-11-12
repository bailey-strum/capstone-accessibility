import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React, {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";



const Register = () => {

    const [regredirect, setRegRedirect] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };


    async function register() {
       
        setRegRedirect(true);


    }

    

    if (regredirect) {
        return <Navigate to = {'/dashboard'}/>;
    }




    return (
        <div>
            

            <div className="container">
                
                <Header/>

                <main>
                    <Container component="main" maxWidth="xs">
                     
                      <Box
                        sx={{
                          marginTop: 8,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                          <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                          Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                              />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Optional if we need it"
                              />
                            </Grid>
                          </Grid>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => register()}
                            
                          >
                            Sign Up
                          </Button>
                          <Grid container justifyContent="flex-end">
                            <Grid item>
                              <Link to={'/login'}>
                                Already have an account? Sign in
                              </Link>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Container>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default Register;
