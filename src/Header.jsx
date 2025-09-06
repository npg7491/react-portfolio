import React from 'react';

// The component receives all its state and functions as props from App.jsx
function Header({ isMenuOpen, toggleMenu, closeMenu, theme, toggleTheme }) {
  return (
    <header>
      <nav className="navbar">
        <a href="#hero" className="nav-branding" onClick={closeMenu}>Ninoska Peralta</a>
        
        {/* The navigation menu gets an 'active' class when isMenuOpen is true */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          {/* Each link will close the menu when clicked on mobile */}
          <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>

        <div className="nav-controls">
          {/* The theme toggle button calls the toggleTheme function and changes its icon based on the current theme */}
          <button id="theme-toggle" title="Toggle theme" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          
          {/* The hamburger icon gets an 'active' class for the 'X' animation and calls toggleMenu on click */}
          <div className={isMenuOpen ? "hamburger active" : "hamburger"} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

