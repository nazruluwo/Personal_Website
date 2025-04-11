import React, { useState, useEffect } from 'react'
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  TestApi,
  Footer
} from "./components";
import FadeIn from './components/FadeIn';

import './App.scss'

function App() {
    const [mode, setMode] = useState('light-mode');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const testApiFunction = (section) => {
        console.log("API TEST: " + section);
        const expertiseElement = document.getElementById(section);
        if (expertiseElement) {
            expertiseElement.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
        } else {
            console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project testApiFunction={testApiFunction}/>
            <Contact/>
            <TestApi/>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;