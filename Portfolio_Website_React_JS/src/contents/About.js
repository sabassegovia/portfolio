import React, { Component } from 'react';
import Social from '../components/Social'

class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <h4>Hey there,</h4>
            <span><h1>I'm Sabas Segovia</h1>
            <h3>Full Stack Web <u>Developer</u> </h3></span>
                <br></br>

                <p>Thanks for making it to my about me page! I started my journey into engineering as a passive hobby during the COVID-19 shutdowns. That led to me taking a few courses at my local community college, <a className="linkStyle" href="https://www.dvc.edu/" target="_blank" rel="noopener noreferrer">Diablo Valley College</a>. I found a passion for the field and decided to enroll in an immersive three month online bootcamp through <a className="linkStyle" href="https://www.hackreactor.com/coding-bootcamp" target="_blank" rel="noopener noreferrer">Hack Reactor</a>. The program was great preparation for building applications on my own.</p>
                <p>Web development has become an increasing point of interest in my every day life. I would like to continue developing applications that can help automate and simplify everyday tasks and make life just a little bit easier.</p>
                <p>Outside of web development, I enjoy studying math. My favorite math channel is <a className="linkStyle" href="https://www.youtube.com/c/numberphile" target="_blank" rel="noopener noreferrer">Numberphile</a>, and I cannot recommend <a className="linkStyle" href="https://www.youtube.com/c/singingbanana/videos" target="_blank" rel="noopener noreferrer">James Grime</a> enough. I also received my Bachelors in Mathematics from <a className="linkStyle" href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer">UC Davis</a>...Go Aggies! I love watching and playing soccer and have held season tickets to the <a className="linkStyle" href="https://www.sjearthquakes.com/" target="_blank" rel="noopener noreferrer">San Jose Earthquakes</a> for over a decade. Other random things I have gotten into lately are spray painting, rock climbing --specifically bouldering since I am terribly afraid of heights, working out, Rocket League, and exploring new trails in my area of California!</p>
                <p>Feel free to check out my social media! They're listed below, feel free to reach out!</p>
                    <Social />
                                </div>
            )
        }
    }

export default About
