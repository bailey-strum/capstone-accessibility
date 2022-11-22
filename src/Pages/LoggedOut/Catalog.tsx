import { Box, Button, Grid, Typography } from "@mui/material";
import {useState} from "react";
import {Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";


const Catalog = () => {
   
    return (
        <div>
            

            <div className="container">
                
                <Header/>

                <main>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                     Accessibility
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "https://www.w3.org/WAI/fundamentals/accessibility-intro/" > Introduction to Accessibility </a>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                      <a href = "https://www.w3.org/WAI/fundamentals/accessibility-intro/#what" > What is Accessibility </a>                                 
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Perceivable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Operable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Understandable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Robust
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        What is accessibility
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        Fundamentals of accesibility                                    
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        Web Accessibility guidelines
                                    </a>
                                </li>      
                            </ul>
                        </Grid>
                       
                    </Grid>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default Catalog;