import { Container, Box, Typography, TextField, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import {
    auth,
    registerWithEmailAndPassword,
} from "../../firebase";
import "./register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password).then(r => console.log('Used has logged in.'));
    };
    useEffect(() => {
        if (loading) return;
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                            
                        placeholder="Full name"
                        autoFocus
                        />

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
                        onClick={register}
                        >
                        Sign Up
                        </Button>
                        <Grid container>

                        <Grid item>
                            <Link to={'/login'} >
                            {"Already have an account? Sign in"}
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
export default Register;