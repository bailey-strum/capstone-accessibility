import Header from "../../Components/Header";
import "./pour.css";

const Understandable = () => {
    return (
        <html>
        <Header/>
        <body>
    <div className="topic_understandable">Understandable</div>
    <div className="readability_paragraph">
    <h5 id="understandable_intro"> Readability </h5>
    <p>When authoring the content of your web pages, you must ensure that text is readable and understandable by as broad an audience as possible. This should also be implemented for use with assistive technologies. </p>

<p> Decoding the text: </p>
<ul>
    <li>Decoding text means recognizing written/typed words or symbols and connecting them to the associated sounds. It should be smooth and effortless for people to read fluently.  </li>
    <li>The less effort spent decoding the words on the page, the more users can spend on actually understanding what is written.</li>
    <li>Text difficulty, sometimes also referred to simply as “readability,” is defined as the level of education needed to be able to read the text </li>
    <li>Include supplemental materials when the text difficulty is more advanced than lower secondary school level, or 9 years of education. </li>
</ul>
</div>

<div className="improve_readability_paragraph">
<p id = "understandable_readability">Improving your website’s readability: </p>
<ul>
    <li>Provide a mechanism to find definitions for unusual words, phrases and/or abbreviations (examples: link to definitions, glossary, inline definitions, description lists, search functions) </li>
    <li>Lessen the amount of mental energy spent decoding by using common and familiar words and avoiding long, run-on sentences </li>
    <li>Provide pared down, plain-language versions of information, such as a summary for a complex research article using technical language</li>
    <li>Be as clear as possible avoid ambiguity </li>
    <li>Use simple language when possible </li>
    <li>Provide a way to identify pronunciation whenever the meaning of the word is ambiguous without it </li>
    <li>Include visuals, like graphics or illustrations, to help explain the information </li>
</ul>

</div>


<div className="primary_language_paragraph">
<p>Make sure the primary language is identifiable (use the language attribute). </p>
<p> Why is identifying the primary language and any changes in language important? </p>

<ul>
    <li>It is used by braille translation software as well as speech synthesizers to follow language changes, such as accents on characters and use of contractions </li>
    <li>Translation technology can also use it</li>
    <li> Definition seeking user agents can be used more effectively</li>
</ul>
</div>

<div className="predictability_paragraph">
<h5> Predictability </h5>
<p> The presentation and layout of the site, and how it is meant to be operated should be consistent throughout. This is important in helping users to efficiently learn how to navigate and utilize the functionality of your site, and therefore reach their needs and preferences quicker.</p>
<p>The UI should exhibit repeated components and structures, and the navigation mechanisms should appear in the same place on multiple pages. Relative order of items should be preserved. The webpage should not undergo significant changes without consent from the user. Unexpected context changes can disorient users, especially those with visual disabilities or cognitive limitations.</p>

<ul>
    <li>Context should not change when any UI component received focus</li>
        <ul>
            <li>Receiving focus should not submit forms, launch new windows, or cause a switch to focus on another component instead</li>
        </ul>
    <li>Use warnings when a context or behavior change is about to take place. In some cases, it is also useful to include more than just visual cues.</li>
    <li>Provide submit buttons</li>
</ul>
</div>

<div className="change_on_req_paragraph">
<h6> Change on request: </h6>
<p> Give users control over their experience. Users have different needs and things that benefit some may be disruptive to others. Users operating the system with a single control may benefit from automatic prompting and animated context changes. However, users with vision impairments will have different preferences on how much content can be viewed at once. There is potential confusion any time context changes are automated, and users should receive cues and be given choices on how the content is presented to them.</p>
</div>

<div className="opt_to_consider_paragraph">
<h6> Options to consider:  </h6>
<ul>
    <li>Allow users to set preferences that can change the order of presentation to a way most suitable for them (like most visited pages, bookmarks, and favorites) </li>
    <li>Provide seamless automatic redirection, such that the user may not even realize it happened </li>
    <li>Have a refresh button, as opposed to automatic updating </li>
    <li>Open new windows and tabs from a link only when necessary </li>
</ul>
</div>

<div className="const_in_appr_paragraph">
<p>Consistency in appearance and navigation: </p>
<ul>
    <li>Repeated functionality and components should be consistently identifiable (use the same labels/icons for things that do the same thing). Additionally, distinct functionality and components should be clearly labeled differently </li>
    <li>Reference pages in a consistent manner </li>
</ul>

<p>Examples of consistent navigation: </p>
<ul>
    <li>Use running headers and footers </li>
    <li>Use expandable navigation menus for content with subsections </li>
    <li>Include a ‘skip to navigation’ link if it is in an inaccessible area at any point on the page </li>
    <li>Use consistent page differentiation (like page numbers, labels) </li>
</ul>

</div>

<div className="input_assist_paragraph">
<h6 id = "understandable_input_assistance"> Input Assistance </h6>
<p>Make sure users understand the functionality as best you can to help prevent mistakes due to users not understanding or recognizing interaction rules. Implement reminders and cues on how to best interact with the system and provide methods for users to easily correct mistakes when they do make them.</p>

<ul>
    <li>Use descriptive instructions, error messages and warnings</li>
    <li>Give suggestions for correction </li>
    <li>Allow the user to review, alter, or reverse input if needed </li>
    <li>Ask the user to confirm before finalizing </li>
    <li>Provide automatic error identification for user inputs </li>
    <li>Give suggestions on troubleshooting or correcting errors </li>
    <li>Always include instructions when user input is necessary </li>
    <li>Make context-sensitive help available (specific suggestions for a particular audience of users) </li>
    <li>Provide the expected format of the entry </li>
</ul>

</div>

<div className="important_note_paragraph">
<h6>Remember that too much information can be just as bad as too little. </h6>

<p> Further Reading:</p>
<ul>
<li><a href = "https://www.w3.org/WAI/fundamentals/accessibility-principles/#understandable" > WCAG: Understandable </a> </li>
<li><a href = "https://www.w3.org/WAI/WCAG21/quickref/#principle3" > WCAG: Principle 3 </a> </li>
</ul>
</div>
      
        </body>
        </html>
    )
}

export default Understandable;