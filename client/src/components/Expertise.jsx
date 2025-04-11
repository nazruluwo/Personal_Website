import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C++, Java, C#",
    "Python",
    "JavaScript",
    "React",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "REST API",
    "SQL",
    "PostgreSQL",
    "Postman",
    "MySql"
];

const labelsSecond = [
    "Git",
    "Jira", 
    "CI/CD",
    "Confluence",
    "GitHub Actions",
    "Docker",
    "Pandas",
    "NumPy"
]
    
    
const labelsThird = [
    "People Management",
    "Project Management",
    "Team Management",
    "Stakeholder Management",
    "Business Analysis",
    "Technical Analysis",
    "Technical Documentation",
    "Software Development",
    "Software Testing",
    "Software Deployment",
    "Software Maintenance",
    "Software Support",
    "Software Quality Assurance",
    "Software Design",
    "Software Architecture",
    "Software Development Life Cycle",
    "Scrum",
    "Product Management"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I have built diverse array of features for ATM(Automated Teller Machine) application as part of my 
                        job responsibility which involves backend and front end development. 
                        I have also worked on web applications (as side projects) from scratch using modern technologies such as React, express and node.js. 
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Tools and Processes</h3>
                    <p>Familiar with different tools and processes to make clients successful.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Leadership & Management</h3>
                    <p>Detail-oriented, execution-focused servant leader with a broad range of technical knowledge. 
                        Experienced in owning customer-facing business-critical services, products, and systems that 
                        generates revenue for the company.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Expertise stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;