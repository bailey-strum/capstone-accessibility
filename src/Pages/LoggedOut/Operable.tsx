import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Header from "../../Components/Header";
import "./operable.css";


const Operable = () => {

    return (
        <html>
        <Header/>
        <body>

        <div className="first_paragraph">
        <p>Functionality available from keyboard - the keyboard should be the baseline of expected input rather than keyboard and mouse. This means that a standard keyboard should be able to seamlessly navigate and operate the functionality of a website. </p>
        </div>
<div className="io_methods">
<p>The following are examples of standard input methods</p>

<ul>
   <li> A keyboard alone </li>
        <ul>
        <li>Should be able to manipulate things such as dials, scroll bars, and similar in a precise fashion</li>
        </ul>
    <li>A mouse alone</li>
        <ul>
        <li>Should provide support for, or allow, a virtual keyboard</li>
        </ul>
    <li>Keyboard/Mouse</li>
    <li>Speech Input</li>
        <ul>
        <li>Website objects will need to be properly labeled so that this can be functional</li>
        </ul>
    <li>Touch Screen</li>
        <ul>
        <li>Website objects will need to be properly sized so that the user can easily and confidently click on the correct object</li>
        </ul>
    <li>Gesture input</li>
</ul>
</div>

<div className="second_paragraph">
<p>Users without fine motor skills or dexterity should be accounted for in cases of functionality requiring fast and/or precise inputs from the user. If such a need for fast and/or precise inputs, then there should be tools for the user to comfortably work the functionality/webpage. . Additionally there should be an undo button, or some similar method for undoing an action, for most accidental activations, and where this isn’t possible, there should be a clear warning before such activations. </p>

<p> Below we have included some helpful references</p>
<ul>
    <li><a href = "https://www.w3.org/WAI/WCAG21/quickref/#keyboard-accessible" > WCAG 2.1: Keyboard Accessible </a> </li>
    <li> <a href = "https://www.w3.org/WAI/WCAG21/quickref/#input-modalities " > WCAG 2.5: Input Modalities </a> </li>
</ul>
</div>

<div className="third_paragraph">
<p>Users should be able to consume the content at a comfortable pace - Users will want control of being able to either slowly or quickly consume content at their own control of pace. This means there should be sufficient time for users to read and watch content.</p>

<ul>
    <li>Rewind, pause, or fast forward content </li>
    <li>Stop blinking/moving/scrolling content </li>
    <li>Postpone/Suppress/Remove interruptions unless the interruptions are necessary for required functionality </li>    
</ul>

    <p>Below we have included a quick reference guide</p>
    <a href = "https://www.w3.org/WAI/WCAG21/quickref/#enough-time " > WCAG 2.2: Enough Time </a> 
</div>


<div className="fourth_paragraph">
<p>Content should not cause physical ailments such as seizures in users without clearly warning the user and allowing for the easy removal of the dangerous content. This type of content should be avoided entirely or used minimally when the user specifically seeks it out. </p>

<ul>
    <li>Don't use content that flashes as especially dangerous rates and patterns </li>
    <li>Warn User </li>
    <li>Provide mechanism for the swift and clear removal of the flashing content </li>
</ul>

    <p> A quick reference</p>    
    <a href = "https://www.w3.org/WAI/WCAG21/quickref/#seizures-and-physical-reactions" > WCAG 2.3: Physcial Reactions</a>
</div>


<div className="fifth_paragraph">
<p>Users should be able to easily navigate themself both within the website and within the page they are located in  </p>

<p> For within the website </p>
<ul>
    <li>Provide a top-down hierarchy of directories with quality directory names/labels such as a menu bars to find specific web pages</li>
    <li>Provide a search bar for find the content of a page or finding a specific page</li>
</ul>

<p>For within the page</p>
<ul>
    <li>There should be a clear goal of the page and what it’s purpose is </li>
    <li> There should be a understand flow of information for the page </li>
    <li>LInks to the page should be understandable and unique </li>
    <li> Page numbers are always good for when a page is part of a larger set </li>
</ul>
    <a href = "https://www.w3.org/WAI/WCAG21/quickref/#navigable" > WCAG 2.4: Navigable  </a>

</div>

        </body>
        </html>
    )
}

export default Operable;