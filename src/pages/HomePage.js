import React, { Component } from 'react'
import Typist from 'react-typist';
// import email from './images/icons/email.png';
// import linkedin from '/images/icons/linkedin.png';
// import resume from './images/icons/resume.png';
// import github from './images/icons/github.png';

class HomePage extends Component {
    render() {
        return (
            <div className="me_image">
                <div className="home_text">
                    <div className="hey_there">Hey there,</div>
                    <Typist className="im_michelle">I'm Michelle<br /> and I write code.</Typist>
                </div>
            </div>
        );
    }
}

export default HomePage;
