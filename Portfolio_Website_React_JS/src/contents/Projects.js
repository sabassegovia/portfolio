import React, { Component } from 'react';
import Social from '../components/Social';
import data from '../data/project-data.js';
import ProjectCard from '../components/ProjectCard.js';

class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <h4>Please excuse the mess, under construction</h4>
                <br></br>
                <ul>
                {data.map(project => {
                    return (
                        <ProjectCard
                            projectUrl={project.projectUrl}
                            projectName={project.projectName}
                            projectDecription={project.projectDecription}
                            projectTechnologies={project.projectTechnologies}
                        />
                )})}
                    <Social />
                </ul>
            </div>
        )
    }
}

    export default Projects