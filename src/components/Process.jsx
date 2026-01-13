// src/About.js
import React from "react";
import Tilt from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBrain, faPenRuler, faCode, faCheck, faRocket } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Process.css";

// Define steps and corresponding icons
const steps = [
  { title: "Idea", icon: faLightbulb },
  { title: "Concept", icon: faBrain },
  { title: "Design", icon: faPenRuler },
  { title: "Develop", icon: faCode },
  { title: "Test", icon: faCheck },
  { title: "Launch", icon: faRocket },
];

const Process = () => {
  return (
    <section className="process" id="Process">
      <div className="container">
        <div className="heading">
          <small>My Process</small>
          <h2>
            Work <span>Process</span>
          </h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div className="col-lg-2" key={index}>
              <Tilt
                className="tilt-container"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={1000}
                scale={1.05}
                transitionSpeed={500}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="bottom"
              >
                <div className="procesCon">
                  <figure>
                    <FontAwesomeIcon icon={step.icon} size="2x" />
                  </figure>
                  <h3>{step.title}</h3>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
