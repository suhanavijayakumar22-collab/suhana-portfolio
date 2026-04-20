import React from 'react';
import { motion } from 'framer-motion';
import sboaImg from '../assets/school.jpeg';
import ssnImg from '../assets/college.jpeg';
import danceImg from '../assets/dance.jpeg';

const About = () => {
  const journey = [
    { title: "SBOA Global", text: "Alumna & Head Girl", img: sboaImg },
    { title: "SSN College", text: "M.Tech Student", img: ssnImg },
    { title: "Hobbies", text: "Bharatanatyam & Art", img: danceImg }
  ];

  return (
    <section className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>My Journey</h2>
        
        <div className="journey-grid">
          {journey.map((item, index) => (
            <motion.div 
              key={index}
              className="journey-card"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${item.img})` }}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            >
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;