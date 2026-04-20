import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- 1. IMPORT your colorful images here ---
import sboaImg from '../assets/sboa-global.jpeg';
import ssnImg from '../assets/ssn-engineering.jpeg';
import mtechImg from '../assets/mtech-project.jpeg';

const sliderData = [
  { id: 1, img: sboaImg, title: "SBOA Global School", location: "Anna Nagar, Chennai", info: "Where the journey began. Alumni & Former Head Girl." },
  { id: 2, img: ssnImg, title: "SSN College of Engineering", location: "Kalavakkam, Chennai", info: "Developing a strong technical foundation." },
  { id: 3, img: mtechImg, title: "M.Tech in Progress", location: "Research Focus", info: "Rediscovering innovation, one project at a time." },
];

const TimelineSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- 2. AUTOMATION: Change slide every 4 seconds ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 4000); // 4 seconds is standard for readability
    return () => clearInterval(timer);
  }, []);

  // --- 3. ANIMATION VARIANTS: Defines the "Sliding" movement ---
  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="slider-container">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="slide"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth sliding
        >
          {/* Colorful image and details block */}
          <div className="slide-content">
            <img src={sliderData[currentIndex].img} alt={sliderData[currentIndex].title} className="slide-image" />
            <div className="slide-text">
              <h3>{sliderData[currentIndex].title}</h3>
              <p className="location">{sliderData[currentIndex].location}</p>
              <p className="info">{sliderData[currentIndex].info}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TimelineSlider;