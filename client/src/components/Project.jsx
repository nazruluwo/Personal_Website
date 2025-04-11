import React from "react";
import '../assets/styles/Project.scss';

function Project(props) {

    function handleClick() {   
        console.log("Button clicked for TestApi ");
        props.testApiFunction("TestApi");
    }

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h3 color={"red"}>Internal API Test Call</h3>
                <button className = "block" onClick={handleClick}>Internal API</button>
                <h3 color={"red"}>External API Test Call</h3>
               <button className= "block" onClick={handleClick}>External API</button>
            </div>
        </div>
    </div>
    );
}

export default Project;