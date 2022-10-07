import React, { Component } from 'react';
import Social from '../components/Social';
import data from '../data/project-data.js';
import ProjectCard from '../components/ProjectCard.js';

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <br></br>
                {data.map(project => {
                   return <ProjectCard projectUrl={project.projectUrl} projectName={project.projectName} />
                })};
            <Social />
            </div>
            )
        }
    }

    export default Projects