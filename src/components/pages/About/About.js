/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import personal from "../../images/personal.png";
import Resume_Vol_Petrytsya from "../../assets/Resume_Vol_Petrytsya.pdf";
import resumeIcon from "../../assets/resumeIcon.png";
import inl from "../../assets/inl.png";
import mail from "../../assets/mail.png";
import github from "../../assets/github.png";
// import ScrollUp from "../../ScrollUp/ScrollUp";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

import "./about.style.css";

function About() {
  return (
    <div>
      <main>
        <section>
          <div className="container about-container">
            <div id="about-info">
              <div className="row">
                <div className="col-sm-12">
                  <h1 className="content-text">About Me</h1>
                  <hr id="portfolioLine" />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <img
                    src={personal}
                    id="personalPicture"
                    className="card-img"
                    alt="personal image"
                  />
                  <p>
                    Who am I? I would say that I am the person who believe that
                    we become smarter people by resolving prolems, but not by
                    escaping from them out of fear. Having said this I would say
                    that I really enjoy coding. Why? Because of at least three
                    reasons. First, I just love it. Secondly, being Software
                    Developer always pushes me to learn and develop myself as
                    personality. Thirdly, there is no way to escape from
                    problems while coding, but the only way to success is to
                    resolve them.
                  </p>
                  <p>
                    Now a few words about my background. Originally I'm from
                    Ukraine. Having moved to the US more than 8 years ago.
                    Started my career as manual QA Engineer and now enjoying
                    working as QA Automation Test Engineer. However, I'm very
                    pasionate about Software Development. At a free time
                    improving my skills with regard to Web Development and
                    always eager to work on a projects as Software Developer.
                  </p>
                  <hr />
                  <div id="aboutIcons" className="row ">
                    <a
                      href={Resume_Vol_Petrytsya}
                      className="img__wrap"
                      target="_blank"
                    >
                      <img
                        className="logo img__img"
                        src={resumeIcon}
                        alt="CV"
                      ></img>
                      <p className="img__description">Resume</p>
                    </a>
                    <a href="https://github.com/Volodya1989" target="_blank">
                      <img className="logo" src={github} alt="CV"></img>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vol-petrytsya-497317196/"
                      // eslint-disable-next-line react/jsx-no-target-blank
                      target="_blank"
                    >
                      <img className="logo" src={inl} alt="CV"></img>
                    </a>
                    <a href="mailto:vpetrytsia@gmail.com" target="_blank">
                      <img className="logo" src={mail} alt="CV"></img>
                    </a>
                  </div>
                  {/* <ScrollUp /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Portfolio />
      <Contact />
    </div>
  );
}

export default About;
