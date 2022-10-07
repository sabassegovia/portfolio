import React, { Component } from 'react'

class ProjectCard extends Component {
    render() {
        return (
            <div class="widecard">
                <div class="compdet">
                    <h2>
                        <a className="linkStyle" href={this.props.projectUrl} target="_blank" rel="noopener noreferrer">{this.props.projectName}</a>
                    </h2>
                    <h4 class="secondtext">About the app: {this.props.projectDecription}</h4>
                    <h4 class="secondtext">Built using: {this.props.projectTechnologies}</h4>
                </div>
            </div>
        )
    }
}

export default ProjectCard