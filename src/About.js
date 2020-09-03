import React from "react";
import ParticlesBg from "particles-bg";
import Resume from './mayajohn-resume.pdf';
import CV from './mayajohn-cv.pdf';

function About() {
    return (
        <div className="container">
            <h2 className="red-text right-align">about me</h2><br />
            <div className="container vert-center">
                <h5 className='red-text link-line'>hello! my name&rsquo;s maya, i am a sophomore at drexel university, and an amateur web developer.
                    i&rsquo;m majoring in computing and security technology, with a concentration in computing security.
                    although currently
                    based in philadelphia for my studies, i hail from a town called milton keynes in south-east england.
                    <br/><br/>
                    i am an avid rock climber and love it so much that i am a rock wall assistant at the drexel rock climbing wall. in addition to that, i spend a lot of time learning new
                    frameworks and programming languages, while also trying to learn more about my field of study by
                    doing activities like <a href="https://overthewire.org/wargames/" target="_blank" className='red-text'>overthewire
                    </a> and <a href="https://www.hackthebox.eu/home/users/profile/247583" target="_blank" className='red-text'>hackthebox</a>. i frequently attend hackathons
                    where i meet many very talented people, learning
                    a lot at each one i go to. i am also very interested in graphic design, having designed all of the
                    graphics for many of my hackathon projects. the largest hobby that i have kept
                    throughout
                    my life is playing music. to date i can play thirteen musical instruments, and you can hear the sounds
                    emanating from wherever i am, giving me a huge creative outlet which i have cherished over the
                    years. i
                    was also lucky enough to be a part of <a href="https://www.intofilm.org/" target="_blank" className='red-text'>into
                        film&rsquo;s</a> young reporters&rsquo; program between 2015 and 2017, giving me a
                    massive leap in my confidence, and the opportunity to attend red carpet events and press junkets,
                    interviewing movie stars, and those who worked behind the scenes. (click <a href="https://www.youtube.com/playlist?list=PLaXqoC848nm3U3r48eFVUfVeZfC34vxPB" target="_blank" className='red-text'>here</a> for a youtube playlist of some of my best
                    bits.)
                </h5><br /><br />
                <div className="container inline center-align">
                    <a href={Resume} download="Maya John - Resume" target="_blank" className='btn-large lower z-depth-2 grey darken-4 red-text none'>my resume</a><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <a href={CV} download="Maya John - CV" target="_blank" className='btn-large lower z-depth-2 grey darken-4 red-text none'>my cv</a>
                </div>
            </div>
            <ParticlesBg type='cobweb' bg={true} color='#f44336'/>
        </div>
    );
}

export default About;