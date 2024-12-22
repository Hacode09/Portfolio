import React from "react";
import WebDev from "./WebDev";
import "./skills.css";


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Technical skills</h2>
            {/* <span className="section__subtitle">My Technical Skills</span> */}
            <div className="skills__container container grid">
                <WebDev />
            </div>
        </section>
    );
};

export default Skills;
