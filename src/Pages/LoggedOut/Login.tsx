import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";
import { Container, Box, Typography, TextField, Button, Grid } from "@mui/material";
import Header from "../../Components/Header";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading]);
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
                    
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                              type="text"
                              margin="normal"
                              required
                              fullWidth
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="E-mail Address"
                              autoFocus
                            />
                            <TextField
                              type="password"
                              margin="normal"
                              required
                              fullWidth
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                              autoFocus
                            />
                            
                            <Button
                              
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={() => logInWithEmailAndPassword(email, password)}
                            >
                              Sign In
                            </Button>
                            <Grid container>
                              <Grid item xs>
                                <Link to={'/reset'} >
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

       
    );
}
export default Login;