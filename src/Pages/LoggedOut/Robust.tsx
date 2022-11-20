import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Header from "../../Components/Header";
import "./robust.css";

const Robust = () => {
    return (
        <html>
        <head></head>
        <body>

        <div className="robust_intial_paragraph">
        Users will be using many different kinds of web-browsers, and good quality web content will be accessible by as many web browsers as possible, if wide reach is the desired goal. These different web browsers will have different tools, extensions, etc which will all be implemented differently. 
        </div>

    <div className="robust_introduction_paragraph">   
    Respect the standards and do not deviate from them unless for a good reason
    Label, name, and provide IDs for any objects
    Provide status messages
    </div>

<div className="browsers_list">
    <p>The most popular web browsers are (according to Oberlo.com as of 2022) </p>
<ol type="1">
    <li>Google Chrome </li>
    <li>Apple’s Safari </li>
    <li>Microsoft Edge </li>
    <li>Mozilla firefox </li>
    <li>Samsung Internet </li>
    <li>Opera </li>
</ol>
</div>


<div className="mobile_os_list">
<p>The most popular operating systems for typical web browsing devices are </p>

<p>Mobile</p>
<ol type = "1">
<li>Android </li>
<li>Apple's IOS </li>

</ol>
</div>

<div className="computer_os_list">
<p>Desktop/Laptop </p>
<ol type = "1">
<li>Windows </li>
<li> MacOS </li>
<li>Linux</li>
</ol>
</div>


        </body>
        </html>
    )
}

export default Robust;