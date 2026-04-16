import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  // Check local storage or system preference on initial load
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement; // This is the <html> tag
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    
    // Save preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, toggleTheme];
};