import React from 'react';
import './App.css';
import Header from './Components/Header'
import  Home  from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Skill from "./Components/Skill"
import "./Home.css"
 import "./About.css"
import "./Skill.css"
import  "./Project.css"
import "./Contact.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About />
      <Skill/>
      <Project />
      <Contact />
    </div>
  );
}

export default App;