import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  // State for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // --- THIS IS THE THEME TOGGLE LOGIC ---
  // 1. Get the saved theme from localStorage, or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // 2. Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // 3. useEffect hook to apply the theme class to the body
  // This code runs whenever the 'theme' state variable changes.
  useEffect(() => {
    // Add or remove the 'dark-mode' class based on the current theme
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    
    // Save the new theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // The [theme] array means "only run this effect when 'theme' changes"


  return (
    <>
      {/* Pass all the necessary state and functions to the Header */}
      <Header 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
  
}

export default App;