import React from "react";
import '../assets/styles/Project.scss';
import axios from "axios";
import { useState } from "react";

function TestApi() {

    const [sampleData, setSampleData] = useState("Sample Data");

    const [externalData, setExternalData] = useState("External Data");

    const getSampleApiData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/test');
            console.log(response.data);
            setSampleData(response.data);
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }
    }

    const getExternalApiData = async () => {
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            console.log(response.data.value);
            setExternalData(response.data.value);
        } catch (error) {
            console.error("Error fetching data from API:", error);
        }
    }
    

    return(
    <div className="projects-container" id="TestApi">
        <h1>API Test</h1>
        <div className="projects-grid">
            <div className="project">
                <button className ="block" onClick={getSampleApiData}>Api Data from Internal Server:localhost:8080</button>
                <p className = "notice">
                    {sampleData}
                </p>
            </div>

            <div className="project">
                <button className ="block" onClick={getExternalApiData}>Api Data from External Source: api.chucknorris.io</button>
                <p className = "notice">
                    {externalData}
                </p>
            </div>
            
        </div>
    </div>
    );
}

export default TestApi;