import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React, {useState} from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";



const Login = () => {
    const [redirect, setRedirect] = useState(false);
  

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    async function login() {
       
        setRedirect(true);


    }

    if (redirect) {
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
                      Sign in
                    </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              autoFocus
                            />
                            <TextField
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
                              sx={{ mt: 3, mb: 2 }}
                              onClick={() => login()}
                            >
                              Sign In
                            </Button>
                            <Grid container>
                              <Grid item xs>
                                <Link to={'#'} >
                                  Forgot password?
                                </Link>
                              </Grid>
                              <Grid item>
                                <Link to={'/register'} >
                                  {"Don't have an account? Sign Up"}
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

export default Login;