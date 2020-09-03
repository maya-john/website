import React from "react";
import { GithubRepoDisplay } from "github-repo-display-react";
import 'github-repo-display-react/dist/index.css';
import Monitor from './monitor.png';
import ParticlesBg from "particles-bg";

function Projects() {
    return (
        <div className="container proj-center">
                <div className='post card container'>
                    <GithubRepoDisplay
                        numOfrepos={40}
                        userName='maya-john'
                        showLanguage ={true}
                    />
                </div>
            <ParticlesBg type='cobweb' bg={true} color='#4caf50'/>
        </div>
    );
}

export default Projects;