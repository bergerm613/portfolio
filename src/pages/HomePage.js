import React, { Component } from 'react'
import Typist from 'react-typist';

class HomePage extends Component {
    render() {
        return (
            <div className="me_image">
                <div className="home_text">
                    <div className="hey_there">Hey there,</div>
                    <Typist className="im_michelle monospace">I'm Michelle<br /> and I write code.</Typist>
                </div>
            </div>
        );
    }
}

export default HomePage;
