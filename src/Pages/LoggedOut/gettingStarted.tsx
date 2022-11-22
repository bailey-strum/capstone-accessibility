import {useState} from "react";
import { Link } from "react-router-dom";
import {Navigate, useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import Header from "../../Components/Header";
/** import "./perceivable.css";  */


const gettingStarted = () => {


    const [regredirect, setRegRedirect] = useState(false);
    const navigate = useNavigate();

    async function getStarted() {
       
        setRegRedirect(true);


    }


    if (regredirect) {
        return <Navigate to = {'/Register'}/>;
    }

    return (
        <div className="getting_started_container">
            <Header/>

            <main>
                    <div className="getting_started_intro">
                        <p> The guidelines and principles for web accessibility are organized into four main categorizations. To be accessible, a website must be:</p>
                        <ul>
                        <li>Perceivable   </li>
                        <li>Operable </li>
                        <li>Understandable </li>
                        <li>Robust </li>
                        </ul>
                    </div>

                    <div className="getting_started_disability">
                        <h6>Disabilities that should be considered when designing your website include: </h6>
                        <ul>
                        <li>Auditory </li>
                        <li>Cognitive </li>
                        <li>Neurological </li>
                        <li>Physical </li>
                        <li>Speech </li>
                            <li>Visual </li>
                        </ul>
                    </div>

                    <div className="getting_started_options_to_consider">
                        <h6>Other limitations from users to consider: </h6>
                        <ul>
                            <li>Temporary disabilities (like injuries or loss of impairment mediators) </li>
                            <li>Different divide types like mobile phones, tablets, smart tv’s, smart watches, etc. </li>
                            <li>Slow internet connections or limited bandwidth </li>
                            <li>Situational limitations such as the environment (public space, bright sunlight, etc) </li>
                            <li>Location in rural areas or developing countries </li>
                        </ul>
                    </div>

                    <div className="getting_started_further_reading">
                    <h6>Further Reading: <a href = "https://www.w3.org/WAI/fundamentals/accessibility-intro/#evaluate" > Accessibility Intro </a> </h6>
                    </div>

                    <div className="getting_started_begin">
                        <h6> To get started please register, to track your progress!</h6>
                    </div>
        
                    <Button
                        style={{
                            display: "flex",
                            margin: '0 auto',
                            padding: 20
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => getStarted()}>
                        Register
                    </Button>
            </main>


        </div>
    )

    }

    export default gettingStarted;