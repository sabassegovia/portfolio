import React, { Component } from 'react';
import Social from '../components/Social';
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   <a className="contactLinks" href="mailto:sabas.a.segovia@gmail.com">sabas.a.segovia@gmail.com</a></h3>

                {/* <h3>Instagram   :   <a className="contactLinks" href="https://www.instagram.com/sabasss/" target="_blank" rel="noopener noreferrer">@sabasss</a></h3> */}


                <h3>Github   :   <a className="contactLinks" href="https://github.com/sabassegovia" target="_blank" rel="noopener noreferrer">sabassegovia</a></h3>

                <h3>LinkedIn   :    <a className="contactLinks" href="https://www.linkedin.com/in/sabassegovia/" target="_blank" rel="noopener noreferrer">My LinkedIn</a></h3>

            <Social />
            </div>
            )
        }
    }

    export default Contact
