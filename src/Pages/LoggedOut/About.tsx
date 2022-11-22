import Header from "../../Components/Header";
import "./about.css";

const About = () => {
   
    return (
                <html>
                <Header/>
                <body className="norbert">
                    <div className="about_us_intro">
                        <h5> Lucky 13 Team</h5>
                        <p>We are a senior capstone group, here at the University of North Texas. 
                            We of Lucky 13 will create a tool to help educate individuals on accessibility for those intending to build websites. 
                            Our goal is to describe, demonstrate and explain what aspects of a website can be changed to be accessible to more people. 
                            Our website will educate product owners, web developers, and designers on WCAG policies and why they are essential in a fun and intuitive way to improve the web for all.</p>
                    </div>
                    <div className="table_header">
                        <h3> Team members </h3>
                    </div>
                    <div className="about_us_table">
                    <table>
                        <tr>
                            <th> Name </th>
                            <th> Role </th>
                        </tr>
                        <tr>
                            <td> Thositha Soysa</td>
                            <td> Front-End Developer</td>
                        </tr>
                        <tr>
                            <td> Mitchell Koen </td>
                            <td> Front-End Developer</td>
                        </tr>
                        <tr>
                            <td> Alexis Phu</td>
                            <td> Front-End Developer </td>
                        </tr>
                        <tr>
                            <td> Suman Kumar Raila </td>
                            <td> Accessibility Tool Developer </td>
                        </tr>
                        <tr>
                            <td> Jethro Bizumuremyi </td>
                            <td> Accessibility Tool Developer</td>
                        </tr>
                        <tr>
                            <td> Gabriel Cossio</td>
                            <td> Accessibility Tool Developer</td>
                        </tr>
                        <tr>
                            <td> Bailey Strum</td>
                            <td> Back-End Developer </td>
                        </tr>
                        <tr>
                            <td> Carly Middleton </td>
                            <td> Back-End Developer</td>
                        </tr>
                    </table>
                    </div>

                    
            </body>
</html>

    )
}


export default About;