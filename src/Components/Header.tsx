import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SimpleDialog from "../Pages/ContrastChecker";
import {logout} from "../firebase";


const Header = () => {

    const [redirect, setRedirect] = useState(false);
    const [regredirect, setRegRedirect] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("email");

    async function login() {
        setRedirect(true);
    }

    async function register() {
        setRegRedirect(true);
    }

    if (redirect) {
        return <Navigate to = {'/login'}/>;
    }

    if (regredirect) {
        return <Navigate to = {'/register'}/>;
    }

    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

                <div>

                    <Box>
                        <Button
                            style={{
                                
                                margin: '0 auto',                         
                                padding: 5
                            }}
                            size="small"
                            variant="contained"
                            color="secondary"
                            onClick={handleClickOpen}
                            >
                            Contrast Calculator
                        </Button>
                        <SimpleDialog
                            selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose}
                        />
                    </Box>
                </div>
                
                <Box style={{marginRight: -125}}>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><Link to={'/catalog'} className="nav-link px-2 link-dark">Catalog</Link></li>
                        <li><Link to={'/about'} className="nav-link px-2 link-dark">About</Link></li>
                    </ul>
                </Box>
                

                <div className="col-md-3 text-end">

                    <Box justifyContent={'space-between'}>
                        <Button
                            style={{
                                
                                margin: 5,
                                padding: 5

                            }}
                            size="small"
                            variant="outlined"
                            color="secondary"
                            onClick={() => login()}>
                            Sign in
                        </Button>
                        
                        <Button
                            style={{
                                
                                margin: '0 auto',
                                padding: 5
                            }}
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => register()}>
                            Sign Up
                        </Button>
                        <button className="dashboard__btn" onClick={logout}>
                            Logout
                        </button>
                    </Box>
                </div>
            </header>
    )
    
}

export default Header