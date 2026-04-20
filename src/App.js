import React from 'react';
import './App.css';
import { useDarkMode } from './hooks/useDarkMode';
import { Sun, Moon } from 'lucide-react'; // Cool icons for your toggle
import Skills from './components/Skills';
import About from './sections/About';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useDarkMode();

 return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">SV</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </nav>

      {/* Hero: Your intro */}
      <section className="hero">
        <h1>Hi, I'm Suhana Vijayakumar</h1>
        <p>M.Tech Student at SSN College of Engineering</p>
      </section>
      <Skills />
      {/* About: This now contains your colorful slider! */}
      <About /> 

      {/* Projects: The new animated gallery for your skills */}
      <Projects />

      <Footer />
    </div>
  );
}

export default App;