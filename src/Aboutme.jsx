import React from 'react';
import './Aboutme.css';
// import myPhoto from './pankaj.jpg'; // Add your photo path here

const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="aboutme-header">
        <h1>About Me</h1>
        {/* <img src={myPhoto} alt="My Photo" className="aboutme-photo" /> */}
      </div>
      <div className="aboutme-content">
        <section className="aboutme-introduction">
          <p>
            Dynamic and ambitious Process Associate with near one year background in data collection and processing. 
            Adept at ensuring data accuracy and completeness while fostering strong client relationships. Skilled in 
            preparing insightful reports and collaborating with team leaders to achieve organizational goals. As an App 
            Engineering Intern, I honed my full-stack development expertise, specializing in ReactJS, .NET, C#, and 
            MongoDB. I designed and implemented scalable web applications, including a comprehensive web-based leave 
            application system. Armed with a Master's in Computer Applications and a B.Sc(IT), I am well-equipped to 
            excel as a Software Developer, bringing proficiency in HTML & CSS, JavaScript, MySQL, and React to drive 
            innovative solutions.
          </p>
        </section>

        <section className="aboutme-certifications">
          <h2>Certifications</h2>
          <ul>
            <li>Oracle Cloud Infrastructure 2024 Certified Foundations Associate [AUG 2024]</li>
            <li>Ethical Hacking Essentials [AUG 2024]</li>
          </ul>
        </section>

        <section className="aboutme-experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Process Associate | Genpact | Dec 2023 - Present</h3>
            <ul>
              <li>Collected and processed data for clients, ensuring accuracy and completeness of all information.</li>
              <li>Worked collaboratively with team leader to establish and achieve organizational goals.</li>
              <li>Prepared, maintained, and provided daily reports to the supervisor, highlighting key insights and trends in the data.</li>
              <li>Ensured data quality and integrity, performing regular checks and audits.</li>
              <li>Developed and maintained strong relationships with clients, providing exceptional service and support.</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>App Engineering Intern | Hitachi Vantara | Jan 2023 - Aug 2023</h3>
            <ul>
              <li>Utilized ReactJS, .NET, C#, MongoDB, and JSON for full-stack development.</li>
              <li>Developed RESTful APIs and designed modular ReactJS components.</li>
              <li>Created a web-based leave application system with role-based access control, responsive UI, and real-time dashboard.</li>
            </ul>
          </div>
        </section>

        <section className="aboutme-projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Leave Application | Hitachi Vantara</h3>
            <ul>
              <li>Web application for employees and efficient leave approval processes for managers and administrators.</li>
              <li>Developed a user-friendly web-based leave application system from scratch.</li>
              <li>Implemented role-based access control and designed a responsive user interface.</li>
              <li>Created a dashboard providing real-time leave status updates.</li>
            </ul>
          </div>
        </section>

        <section className="aboutme-education">
          <h2>Education</h2>
          <ul>
            <li>MCA - Jain University, Bangalore, 2023</li>
            <li>B.Sc(IT) - Gossner College, Ranchi, 2019</li>
          </ul>
        </section>

        <section className="aboutme-skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Debugging and Troubleshooting</li>
            <li>React</li>
            <li>MySQL</li>
            <li>DBMS</li>
            <li>Core Java</li>
            <li>C++</li>
            <li>Basics of Azure</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Aboutme;
