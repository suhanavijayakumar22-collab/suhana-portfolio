import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React.js", "Python", "Data Analysis", 
  "UI/UX", "Research", "Shell Scripting", 
  "Unix Utilities", "Automation"
];

const Skills = () => {
  return (
    <section className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="skills-title"
      >
        Technical Toolkit
      </motion.h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill}
            className="skill-chip"
            /* This is the effect you wanted: pop up and turn blue */
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "#007bff",
              color: "#fff",
              borderColor: "#007bff"
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;