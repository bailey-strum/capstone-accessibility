import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
import Header from "../../Components/Header";
import "./pour.css";


const Perceivable = () => {

    return (
        <html>
        <Header/>
        <body>
    
        <div className="initial_paragraph">
        <p> Making a website perceivable means that users must be able to perceive the information in some way using one or more of their senses. The critical part of the perceivable category in web accessibility is that the content is presented in different ways, enough to make sure as many people as possible can still perceive it.</p>
        
        <p>Adaptability: Content should have multiple ways of being presented.</p>
        <p>Distinguishability: Content should be easy to see and hear.</p>
        </div>
        
        <div className="b_list">
        Some important examples of making your website perceivable include:
        
        Text to speech
        Descriptive captioning for images
        Informative labels
        Description of data represented in charts, graphs, and diagrams
        
        </div>        


        <div className="adapt_paraph">
        Adaptability
        In a nutshell: This means providing sufficient alternatives to your website’s content.
        
        Practice good semantics when building your pages. Content structures, things like the headings, lists, tables, etc. must be marked up properly to allow users to change the presentation of the content. The sequences of information should be independent of any way of presenting it. For example, the correct sequence of reading the page when using text to speech should always be programmatically determinable.
        
        Understanding the content should not be reliant on any one sensory characteristic (color, size, orientation, placement, etc.)
        
        The ideal presentation should be customizable, via settings provided by browsers and assistive technologies.
        
        </div>

        <div className="gen_list">
       <h5>General:</h5>
        <ul>
        <li>Portrait and landscape orientations </li>
       <li>Input and user interface purposes are always identifiable</li> 
        </ul>
        </div>

        <div className="text_list">
        <h5>Text content:</h5>
        <ul>
       <li> Customizable features make your website more accessible. </li>
        <li>Text to speech </li>
        <li>Text resizing </li>
        <li>Sufficient color contrast </li>
        <li>Styling options </li>
        <li>Conversion to braille </li>
        <li>Conversion to symbols or simpler language </li>
        <li>Auto-generation of page outlines and summaries </li>
        <li>Ability to focus on particular parts more easily</li>
        </ul>
        </div>


        <div className="non_text_list">
        <h5>Non-text content (images, audio, video, and multimedia): </h5>
        <p>With non-text content, you want to give the user an experience as close as possible to being able to see the visual media when they cannot see it. </p>
        <ul>
        <li>Use short equivalents for images, such as icons, buttons, and graphics</li>
        <li>Describe data that is shown in visual representations (like charts, diagrams, and graphs) with text as well.</li>
        <li>Provide text descriptions of audio and video files </li>
            <ul>
                <li>This can include transcripts and closed captioning.</li>
                <li>Sign language interpretations, text, and/or auditory narration</li>
            </ul>
        <li>Label interface components (input, form controls, etc.)</li>
        <li>Text to speech should be able to relay all necessary information- if the user can’t see the screen at all, they should still be able to find what they need.</li>
        <li>Custom text sizes for people with reading difficulties</li>
        <li>Compatibility with display on braille devices</li>
        <li>Navigation by voice recognition</li>
        <li>Decoration and formatting, if it is purely to enhance visuals or is not presented to the users, should be ignored by assistive technology (eg, text to speech should not reach aloud decorative elements)</li>
        </ul>
        </div>



        <div className="text_alternative_list">
        <h5>Text alternatives </h5>
        <p>You can include a short text alternative to briefly describe what it is. For some content, like videos, animations, and graphs, longer alt text can be additionally provided to describe it fully. Things to think about including in your text alt:</p>
        <ul>
            <li>Why is the content there/what is its purpose</li>
            <li>What information does it give the user</li>
            <li>What words would you use to convey the same function</li>
        </ul>

        <p>Short and simple code example: the Html tag includes the ‘alt’ and ‘title’ fields.</p>
        
        <p>Alt: Direct representation of the image and what it visually conveys, brief and concise. This is what the screen reader will read out when it encounters the image.</p>
        
        <p>Title: Extra contextual information is needed. This text is displayed by browsers as tooltips when the mouse pointer hovers over the image.</p>
        
        <p>You can leave the alt attribute empty for images that are used purely for decoration. Screen readers will describe it simply as an image and will not attempt to describe its contents.</p>
        
        </div>


        <div className="disting_list">
        <h5> Distinguishability </h5>
       <p> In a nutshell: This means making it as easy as possible for users to see and hear the content. </p>
       <ul>
        <li> Do not use color as the only way of identifying or differentiating content</li>
        <li>Default colors in foreground and background must be sufficiently contrasting</li>
        <li>No information must be lost when resizing text up to 400%</li>
        <li> Reflow text to fit into smaller windows, while maintaining text resizing customization</li>
            <ul>
            <li>It is best when users are not required to horizontally scroll to read a line of text</li>
            <li>Reflow into one column when the user zooms</li>
            <li>Mobile window width: 320 CSS pixels is the minimum size</li>

            </ul>
        <li>Audio volume must be adjustable, and easily able to be paused and stopped; background audio should default to being low to prevent distraction or interference (for example, clashing with text to speech reading)</li>
        <li>Use proper line and paragraph spacing, and avoid justified text</li>
        <li>Use text when possible, rather than images of text</li>
        </ul>
        </div>


        <div className="cont_hov_list">
        <h5>Content on pointer hover or keyboard focus</h5>
        <ul>
            <li>Include a way to dismiss the content without moving the pointer/focus</li>
            <li>Allow the pointer to move over the content without the content disappearing</li>
            <li>Ensure the content remains visible until the hover/focus is removed, the user dismisses it, or it is no longer valid</li>
        </ul>
        </div>
        

        <div className="wcag_standard">
        <p>More about color contrast guidelines from W3C:</p>
        <p>Aim is to make text readable for 20/40 vision. A person with 20/40 vision can only read something 20 feet away that a 20/20 person could see at 40 feet away.</p>
        
       <p> The ratio is the difference between the brightness of the lightest and and darkest colors in the given range, also called the relative luminance. It is calculated based off of the RGB values of the colors. </p>
        
        <h5>WCAG standard: </h5>
        <p>Normal text    AA    4.5:1    AAA 7:1</p>
        <p>Large text    AA    3:1    AAA 4.5:1 </p>
        
        <p>Anti-aliased text: This smooths the lines of graphics and text to appear less jagged and thus easier to read on the screen. The process sacrifices a bit of contrast and may cause ratios to change, so it is something to be mindful of.</p>
        
       </div>





        </body>
        </html>
    )
}

export default Perceivable;