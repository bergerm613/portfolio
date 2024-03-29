import React, { Component } from "react";
import indicative from "../images/companies/indicative.png";
import rotation from "../images/companies/rotation.png";
import gwc from "../images/companies/gwc.png";
import quartet from "../images/companies/quartet.png";

class ExperiencePage extends Component {
  render() {
    return (
      <div className="exp_page">
        <div className="work_title monospace">Work Experience</div>

        <div className="box_full_width background_burnt_orange">
          <BoxContent
            name="Quartet"
            logo={quartet}
            description="a platform that makes it easier for people to get the best mental health care for them"
            languages="REACT | TYPESCRIPT | JAVA"
            link="https://quartethealth.com"
          >
            Working at Quartet, I collaborated with designers, project managers,
            and engineers in an agile workflow to ensure new projects were
            thoughtfully defined and successfully completed. In addition, I
            implemented changes and optimizations to improve the existing
            codebase.
          </BoxContent>
        </div>

        <div>
          <div className="box_half_width background_light_gray">
            <BoxContent
              name="Indicative"
              logo={indicative}
              description="a customer analytics platform"
              languages="REACT | ANGULAR | TYPESCRIPT"
              link="https://indicative.com"
            >
              I was very excited to make a real impact while interning at
              Indicative with a mixture of feature implementations,
              optimizations, and bug fixes. This included a new time zone
              property, which is now used in all of Indicative’s tools.
            </BoxContent>
          </div>
          <div className="box_half_width background_navy">
            <BoxContent
              name="The Rotation"
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
        </div>

        <div className="box_full_width background_light_blue">
          <BoxContent
            name="Girls Who Code"
            logo={gwc}
            description="nonprofit focused on the support and increase of women in computer science"
            languages="ARDUINO-C | LILYPAD ARDUINO | SOFT CURCUITS"
            link="https://girlswhocode.com/"
          >
            As a teacher’s assistant at the GWC Campus program, I was able to
            help guide and support a class of middle school future-engineers as
            they learned the basics of Arduino coding and wearable technology.
          </BoxContent>
        </div>

        <a
          href="https://github.com/bergerm613"
          target="_blank"
          rel="noopener noreferrer"
          className="github_button comfortaa"
        >
          Projects on Github
        </a>
      </div>
    );
  }
}

const BoxContent = (props) => {
  return (
    <div className="company_wrapper">
      <div>
        <img src={props.logo} alt={props.name} className="company_logo" />
        <div className="company_desc">{props.description}</div>
      </div>

      <div className="opacity_zero company_par">{props.children}</div>

      <div className="opacity_zero languages monospace">{props.languages}</div>
      <a
        className="opacity_zero check_it_out comfortaa"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        check it out
      </a>
    </div>
  );
};

export default ExperiencePage;
