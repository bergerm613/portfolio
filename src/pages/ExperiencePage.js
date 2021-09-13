import React, { Component } from "react";
import indicative from "../images/companies/indicative.png";
import rotation from "../images/companies/rotation.png";
import gwc from "../images/companies/gwc.png";

class ExperiencePage extends Component {
  render() {
    return (
      <div className="exp_page">
        <div className="work_title monospace">Work Experience</div>

        <div className="indicative_box">
          <BoxContent
            logo={indicative}
            description="a customer analytics platform"
            languages="REACT | ANGULAR | TYPESCRIPT"
            link="https://indicative.com"
          >
            I was very fortunate to make a real impact while interning at
            Indicative with a mixture of feature implementations, optimizations,
            and bug fixes. This included a new time zone property, which is now
            used in all of Indicative’s tools.
          </BoxContent>
        </div>
        <div className="row_two">
          <div className="rotation_box">
            <BoxContent
              logo={rotation}
              description="the world’s first streetwear rental company"
              languages="REACT | RUBY ON RAILS | FIGMA"
              link="https://therotation.club"
            >
              At The Rotation, I developed user-friendly features in React and
              Ruby on Rails, including Netflix-style next package queue, catalog
              search, and shipping workflow tools for operations employees.
            </BoxContent>
          </div>
          <div className="gwc_box">
            <BoxContent
              logo={gwc}
              description="nonprofit focused on the support and increase of women in computer science"
              languages="ARDUINO-C | LILYPAD ARDUINO | SOFT CURCUITS"
              link="https://girlswhocode.com/"
            >
              As a teacher’s assistant at the GWC Campus program, I was able to
              help guide and support a class of middle school future-engineers
              as they learned the basics of Arduino coding and wearable
              technology.
            </BoxContent>
          </div>
        </div>

        <a
          href="https://github.com/bergerm613"
          target="_blank"
          className="github_button comfortaa"
        >
          and check out my github
          <br /> for plenty of projects!
        </a>
      </div>
    );
  }
}

const BoxContent = (props) => {
  return (
    <div className="company_wrapper">
      <div>
        <img src={props.logo} className="company_logo" />
        <div className="company_desc">{props.description}</div>
      </div>

      <div className="opacity_zero company_par">{props.children}</div>

      <div className="opacity_zero languages monospace">{props.languages}</div>
      <a
        className="opacity_zero check_it_out comfortaa"
        target="_blank"
        href={props.link}
      >
        check it out
      </a>
    </div>
  );
};

export default ExperiencePage;
