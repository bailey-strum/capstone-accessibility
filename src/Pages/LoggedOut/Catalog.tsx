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
                                    
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "https://en.wikipedia.org/wiki/Accessibility" > Introduction to Accessibility </a>
                                    
                                </li>
                                <li className="nav-item">
                                 
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "https://www.w3.org/WAI/fundamentals/accessibility-intro/" > Introduction to Web Accessibility </a>
                                   
                                </li>
                                <li className="nav-item">
                                   
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                      <a href = "https://www.w3.org/WAI/fundamentals/accessibility-intro/#what" > Accessibility fundamentals </a>                                 
                                    
                                </li>    
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Perceivable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                               
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "/Perceivable/#perceive_intro" > What is Perceivable </a>
                                   
                                </li>
                                <li className="nav-item">
                            
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        <a href = "/Perceivable/#perceive_text_option" > Perceivable text options </a>                                    
                              
                                </li>
                                <li className="nav-item">
                             
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        <a href = "/Perceivable/#perceive_nontext_options" > Perceivable non-text options </a>                                    
                                
                                </li>     
                                <li className="nav-item">
                              
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        <a href = "/Perceivable/#perceive_text_alts" > Perceivable text alternatives </a>                                    
                                   
                                </li>   
                                <li className="nav-item">
                             
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        <a href = "/Perceivable/#perceive_distinguish" > Making text more distinguishable </a>                                    
                             
                                </li>   
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Operable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                      
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "/Operable/#operable_intro" > What is Operable </a>                                    
                         
                                </li>
                                <li className="nav-item">
                             
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        <a href = "/Operable/#operable_standardIO" > Standard input/output </a>                                                                       
                             
                                </li>
                                <li className="nav-item">
                             
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        <a href = "/Operable/#operable_nagivation" > Helpful website navigation steps </a>                                                                      
                         
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Understandable
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                  
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "/Understandable/#understandable_intro" > What is Understandable </a>                                                                     
                                
                                </li>
                                <li className="nav-item">
                             
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        <a href = "/Understandable/#understandable_readability" > Improve readability </a>                                                                                                       
                               
                                </li>
                                <li className="nav-item">
                        
                                        <span data-feather="users" className="align-text-bottom"></span>
                                        <a href = "/Understandable/#understandable_input_assistance" > Input Assistance </a>                                                                                                      
                                    
                                </li>      
                            </ul>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h3">
                                Robust
                            </Typography>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                           
                                        <span data-feather="file" className="align-text-bottom"></span>
                                        <a href = "/Robust/#robust_intro" > What is Robust </a>                                                                                                     
                            
                                </li>
                                <li className="nav-item">
                            
                                        <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                        <a href = "/Robust/#robust_list_of_tech" > Lists of "most used" tech   </a>                                                                                                                                      
                                    
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