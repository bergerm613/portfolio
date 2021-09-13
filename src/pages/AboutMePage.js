import React, { Component } from "react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import Sparkle from "react-sparkle";
import hand from "../images/tooltips/hand.png";
import touro from "../images/tooltips/touro.jpg";
import cinnamon from "../images/tooltips/cinnoman.jpg";
import { Link } from "react-router-dom";

class AboutMePage extends Component {
  render() {
    return (
      <div className="about_page">
        <div className="ocean_image">
          <Sparkle fadeOutSpeed={30} />
        </div>
        <div className="rectangle">
          <div className="about_title monospace">A Little About Me</div>
          <div className="about_text">
            Hello there, I see you have found my website.
            <Tooltip
              theme="light"
              html={<img src={hand} alt="" height="35px" />}
            >
              {" "}
              Welcome!{" "}
            </Tooltip>
            My name is Michelle, and I am a full stack developer with a love of
            beautiful code, clean design, and collaborative work.
            <br />
            <br />I graduated with a degree in{" "}
            <Tooltip
              theme="light"
              title="Why are students cautious to approach CS? <br/> It bytes"
            >
              {" "}
              Computer Science
            </Tooltip>{" "}
            from
            <Tooltip
              theme="light"
              html={<img src={touro} alt="" height="35px" />}
            >
              {" "}
              Touro College,{" "}
            </Tooltip>
            and since then had wonderful opportunities to put that theory into
            practice, and contribute to an array of amazing teams and projects
            (but more about that <Link to="/experience">here</Link>). When not
            deep in code, I can often be found with
            <Tooltip
              theme="light"
              title="mostly non-fiction, but open to all recommendations"
            >
              {" "}
              a new book{" "}
            </Tooltip>
            or making the
            <Tooltip
              theme="light"
              html={<img src={cinnamon} alt="" height="35px" />}
            >
              {" "}
              world's best cinnamon buns.
            </Tooltip>
            <br />
            <br />
            I've designed and built this website to show you a little of what I
            can do with web development. So take some time to look around, and{" "}
            <Link to="/contact">don't hesitate to reach out</Link> - I'm always
            happy to chat.
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMePage;
