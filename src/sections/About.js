import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>My Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>M.Tech Student</h3>
          <p>SSN College of Engineering, Kalavakkam</p>
        </div>
        <div className="timeline-item">
          <h3>Alumna & Former Head Girl</h3>
          <p>SBOA Global School</p>
        </div>
      </div>
      <div className="hobbies">
        <h3>Beyond the Code</h3>
        <p>Bharatanatyam, freestyle, singing.</p>
      </div>
    </section>
  );
};

export default About;