import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import logo from './my_pic.jpg';

function Main() {

  return (
    <div className="container" id="home">
      <div className="about-section">
        <div className="image-wrapper"> 
          <img src={logo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nazruluwo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/md-nazrul-islam-a479b725/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Md Nazrul Islam</h1>
          <p><b>Software Development Professional</b></p>
            <ul>
              <li>Detail-oriented, execution-focused servant leader with a broad range of technical knowledge. </li>
              <li>Experienced in owning customer-facing business-critical services, products, and systems that generates revenue for the company.</li>
              <li>12+ years of experience in the software industry offering insights on design, sizing, implementation, test strategy, 
                defect triage, and project retrospectives. 5+ years experience leading & managing teams of ICs, and 8+ years as a developer.</li>
              <li>Delivered ATM products in multiple vendor platforms, team sizes, and timelines.</li> 
              <li>Passionate about leadership, growth, and continual improvement of people, culture, and teams.</li>
              <li>Experienced working & managing in dynamic cross-discipline agile geo-distributed environments.</li>
              <li>Technical skills: C++, Java, C#, Python, Javascript, HTML5, CSS, GoLang(Basics), React.js, Node.js, REST API, express.js</li>
              <li>Eager to learn new ones as per job requirements</li>
            </ul>
          <div className="mobile_social_icons">
            <a href="https://github.com/nazruluwo" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/md-nazrul-islam-a479b725/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div><br></br></div>
          <div className="container-button">      
            <a className="button2" role="button" position="center" href="../../public"
            download="NAZRUL_RESUME_DEV_MANAGER.pdf">
            Get My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;