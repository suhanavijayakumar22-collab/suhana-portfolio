import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/project';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div 
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.05, translateY: -10 }} // Sliding/Moving effect on hover
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a href={project.link} className="project-link">
              View Project <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;