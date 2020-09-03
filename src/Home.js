import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import ParticlesBg from "particles-bg";

function Home () {
    return (
        <div className="container center-align vert-center">
            <h1 className='indigo-text'>hello, i'm maya.</h1>
            <h4 className="indigo-text">drexel university cybersecurity, class of 2024</h4><br />
            <NavLink to='/about' className='btn-large lower z-depth-2 grey darken-4 indigo-text none'>learn more about me</NavLink>
            <ParticlesBg type='cobweb' bg={true} color='#3f51b5'/>
        </div>
    );
}

export default Home;