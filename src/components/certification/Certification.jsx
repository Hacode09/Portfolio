import React from "react";
import "./certification.css";

const certifications = [
  {
    title: "Generative AI Professional Certificate",
    issuer: "Microsoft & LinkedIn Learning",
    description:
      "Successfully completed a Generative AI certification focused on Large Language Models, Prompt Engineering, AI automation, and emerging AI technologies. Gained practical insights into building intelligent solutions, optimizing workflows, and leveraging AI tools to drive innovation across modern software and enterprise ecosystems.",
    link: "https://drive.google.com/file/d/1RB6KtrUnBXCtCac7ZPLboCMVWya6QBXa/view?usp=drive_link"
  },
  {
    title: "micro1 certification",
    issuer: "Certified by micro1 AI Interview",
    description:
      "Earned certification by successfully completing assessments in TypeScript, JavaScript, Python, React, OOP, DSA, SQL, and version control. Reinforced technical expertise, problem-solving skills, and a commitment to continuous learning and professional growth.",
    link: "https://drive.google.com/file/d/1orh213OMfmCwn5e3V6TmV8I0phdED1ak/view?usp=drive_link"
  },
  {
    title: "Frontend Development Certification",
    issuer: "John Hopkins University (Coursera)",
    description:
      "Earned certification in HTML, CSS, and JavaScript, strengthening advanced frontend development skills and modern web engineering practices. Demonstrated proficiency in creating responsive, accessible, and high-performance web applications through effective use of semantic HTML, scalable CSS architectures, and dynamic JavaScript-driven user experiences.",
    link: "https://drive.google.com/file/d/1ER1dAvJv0hj3hzPcNGgbuUkA8gVXwIDi/view?usp=sharing"
    
  },
  {
    title: "introduction to C++ programming",
    issuer: "SoloLearn",
    description:
      "Completed an introductory C++ programming course covering fundamental concepts such as syntax, data types, control structures, functions, and object-oriented programming. Developed a solid foundation in C++ programming principles and best practices.",
    link: "https://drive.google.com/file/d/1ohWpgxsvfXB4tv-cGiKikSVjOUPmgkzi/view?usp=sharing"
  },
  {
    title: "Hacktoberfest 2021 Contributor",
    issuer: "DevCommunity & DigitalOcean",
    description:
      "Received Hacktoberfest 2021 recognition for making successful open-source contributions, showcasing proficiency in Git, GitHub, collaboration workflows, and community-driven software development.",
    link: "https://www.linkedin.com/posts/er-rahul_hacktoberfest2021-devcommunity-digitalocean-activity-6898635149366681600-G3kD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOctesBCOQp-VrfOc9LTCtnGDxsVdhQ6eQ"
  },
  {
    title: "30daysofgooglecloud2022 Challenge",
    issuer: "DevCommunity & DigitalOcean",
    description:
      "Completed the 30 Days of Google Cloud challenge, demonstrating proficiency in cloud computing concepts, services, and best practices.",
    link: "https://www.linkedin.com/posts/er-rahul_30daysofgooglecloud-30daysofgooglecloud-google-activity-6904405996236849152-I4Tf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADOctesBCOQp-VrfOc9LTCtnGDxsVdhQ6eQ"
  }
];

const Certification = () => {
  return (
    <section className="certification section" id="certifications">
      <h2 className="section__title">Certification / Achievements</h2>
      <span className="section__subtitle">Verified achievements and professional learning</span>
      <div className="certification__container container grid">
        {certifications.map((cert, index) => (
          <article className="certification__card" key={index}>
            <div className="certification__header">
              <div>
                <h3 className="certification__title">{cert.title}</h3>
                <p className="certification__issuer">{cert.issuer}</p>
              </div>
              <span className="certification__meta">{cert.date}</span>
            </div>
            <p className="certification__description">{cert.description}</p>
            <a
              className="certification__link"
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certification;
