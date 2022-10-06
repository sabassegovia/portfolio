import React, { Component } from 'react';
import Social from '../components/Social';

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <br></br>
                <h2>
                    <a className="linkStyle" href="http://getscriptly.com/" target="_blank" rel="noopener noreferrer">Script.ly</a>
                    </h2>
                <h2>
                    <a className="linkStyle" href="https://sabassegovia.github.io/bartendersfriend" target="_blank" rel="noopener noreferrer">Bartenders Friend</a>
                    </h2>
                <h2>
                    <a className="linkStyle" href="https://nextjs-practice-deploy-git-main-sabassegovia.vercel.app/" target="_blank" rel="noopener noreferrer">Notes.App</a>
                </h2>
                <h2>
                    <a className="linkStyle" href="https://sabassegovia.github.io/sprite_animations/" target="_blank" rel="noopener noreferrer">Vanilla Javascript Sprite Animations</a>
                </h2>
                <h2>
                    <a className="linkStyle" href="https://sabassegovia.github.io/managing-state/" target="_blank" rel="noopener noreferrer">Responsive Sprite Animations
                    </a>
                </h2>
            <Social />
            </div>
            )
        }
    }

    export default Projects