import React, { Component } from 'react'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'
import Sparkle from 'react-sparkle'
import hand from '../images/tooltips/hand.png'
import touro from '../images/tooltips/touro.jpg'
import rotation from '../images/tooltips/rotation.png'
import indicative from '../images/tooltips/indicative.png'
import cinnoman from '../images/tooltips/cinnoman.jpg'

class AboutMePage extends Component {
    render() {
        return (
            <div className="about_page">
                <div className="ocean_image"><Sparkle fadeOutSpeed={30}/></div>
                <div className="rectangle">
                    <div className="about_title comfortaa">All About Me</div>
                    <div className="about_text">
                        Hello there, I see you have found my website. <Tooltip theme="light" html={(<img src={hand} alt="" height='35px' />)}>Welcome!</Tooltip> I do hope you enjoy your stay.
                        I'm Michelle, and I just graduated with a Computer Science degree from <Tooltip theme="light" html={(<img src={touro} alt="" height='35px' />)}>Touro College</Tooltip>. It was a great experience where I built a solid foundation in my knowledge of languages, data structures, and <Tooltip theme="light" title="What's the shortest way to someone heart?<br/> The Dijkstra's algorithm.">algorithms</Tooltip>.<br /><br />
                        Besides for that, I had two wonderful internships, where I worked with teams of engineers to build new features for web apps, one at a <Tooltip theme="light" html={(<img src={rotation} alt="" height='35px' />)}>men's fashion subsciption startup</Tooltip>, and the other at a company <Tooltip theme="light" html={(<img src={indicative} alt="" height='35px' />)}>building data analytic tools</Tooltip>. Both gave me a love for collaborative work, and a deep appriciation for a job well done.<br /><br />
                        When I'm not knee deep in code, I can be found curled up with  <Tooltip theme="light" title="Any will do, but memoirs are my favorite.">a book</Tooltip>, or making the world's best <Tooltip theme="light" html={(<img src={cinnoman} alt="" height='35px' />)}>cinnoman buns</Tooltip> (no lie).
                    </div>
                </div>

                {/* <div className="icons">
                    <img src={email} alt="email" height="80px" className="margin_right_icon" />
                    <img src={linkedin} alt="linkedin" height="80px" className="margin_right_icon" />
                    <img src={resume} alt="resume" height="80px" className="margin_right_icon" />
                    <img src={github} alt="github" height="80px" className="margin_right_icon" />
                </div> */}

            </div>
        );
    }
}

export default AboutMePage;
