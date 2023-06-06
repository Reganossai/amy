import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Projects = () =>{
return(
	<div className="mopp">
	<div className="contact-header">
	<Navbar/>
	</div>																
<div className="first-cont">
<h1>Projects</h1>
<h3>I have about 10 years of commercial experience helping start-ups, small businesses, tech companies and agencies create successful websites.</h3>
</div>
<div className="projects">
    <h1>Sekior</h1>
    <h2>An app created using react, sass(for styling), javascript and bootstrap</h2>
    <a href='https://reagan-ossai-lendsqr-fe-test.netlify.app'>url link</a>

    <h1>Flighttesttwo</h1>
    <h2>An app created using angular, css, javascript and bootstrap</h2>
    <a href='https://flighttesttwo.netlify.app'>url link</a>

    <h1>Flighttest</h1>
    <h2>An app created using react, css, javascript and bootstrap</h2>
    <a href='https://flighttest.netlify.app'>url link</a>
    
    
    </div>
    <hr/>
<Footer/>
	</div>);




} 
export default Projects;