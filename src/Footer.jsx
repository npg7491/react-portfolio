import React from 'react';

function Footer() {
    return (
        <>
          {/* Styles for the footer are included directly in the component */}
          <style>{`
            .site-footer {
              background-color: #2c3e50; /* A dark slate blue */
              color: #ecf0f1; /* A light, soft white */
              text-align: center;
              padding: 2rem 1rem;
              font-size: 0.9rem;
            }
          `}</style>

          <footer className="site-footer">
            <p>&copy; 2025 Ninoska Peralta. All rights reserved.</p>
          </footer>
        </>
    );
}

export default Footer;
