import React from 'react';
import './App.css';
import { useDarkMode } from './hooks/useDarkMode';
import { Sun, Moon } from 'lucide-react'; // Cool icons for your toggle

import About from './sections/About'; 
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="app-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <h1 className="logo">SV</h1>
        <div className="nav-links">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Suhana Vijayakumar</h1>
        <p>M.Tech Student at SSN College of Engineering</p>
        <div className="badge">React Developer</div>
      </section>

<About />

      <Footer /> 
    </div>
  );
}

export default App;