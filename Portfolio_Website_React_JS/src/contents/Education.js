import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import Social from '../components/Social'

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <a className="eduLinkStyle" href="https://www.hackreactor.com/coding-bootcamp" target="_blank" rel="noopener noreferrer"><Widecard title="Software Engineering Coding Bootcamp" where="Hack Reactor" from="February 2022" to="May 2202"/></a>

                <a className="eduLinkStyle" href="https://www.ucdavis.edu/" target="_blank" rel="noopener noreferrer"><Widecard title="Bachelor of Arts in Mathematics" where="University of California, Davis" from="August 2014" to="December 2016" /></a>

                <a className="eduLinkStyle" href="https://www.dvc.edu/" target="_blank" rel="noopener noreferrer"><Widecard title="Associate of Science in Computer Science | Electronics and Electrical Technology" where="Diablo Valley College" from="2011" to="Present" /></a>

                <a className="eduLinkStyle" href="https://www.dvc.edu/" target="_blank" rel="noopener noreferrer"><Widecard title="Associate of Arts in Economics | Mathematics" where="Diablo Valley College" from="2011" to="Present" /></a>

                <Social />
            </div>
            )
        }
    }

export default Education
