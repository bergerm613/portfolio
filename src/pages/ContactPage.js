import React, { Component } from 'react'
import resumePDF from '../resume.pdf'
import email from '../images/icons/email.png'
import linkedin from '../images/icons/linkedin.png'
import resume from '../images/icons/resume.png'
import github from '../images/icons/github.png'

class ContactPage extends Component {
    render() {
        return (
            <div className="contact_page">
                <div className="contact_words roboto">
                    <div className="monospace im_glad">I'm glad you asked</div>
                    <div className="contact_par">
                        I'd be happy to hear from you, so please <br />
                        feel free to reach out!
                    </div>
                </div>

                <div className="icons">
                    <a href="mailto: bergerm613@gmail.com?subject=Hey, loved your website!" target="_blank" className="icon_group">
                        <img src={email} alt="email" height="80px" className="icon_img" />
                        <span className="icon_words">email</span>
                    </a>

                    <a href="https://www.linkedin.com/in/michelle-berger-46aa5818b" target="_blank" className="icon_group">
                        <img src={linkedin} alt="linkedin" height="80px" className="icon_img" />
                        <span className="icon_words">linkedin</span>
                    </a>

                    <a href="https://github.com/bergerm613" target="_blank" className="icon_group">
                        <img src={github} alt="github" height="80px" className="icon_img" />
                        <span className="icon_words">github</span>
                    </a>

                    <a href={resumePDF} target="_blank" className="icon_group">
                        <img src={resume} alt="resume" height="80px" className="icon_img" />
                        <span className="icon_words">resume</span>
                    </a>
                </div>

                {/* <div className="empty" /> */}
            </div>
        );
    }
}

export default ContactPage;
