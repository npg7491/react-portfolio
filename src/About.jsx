import React from 'react';

function About() {
    

    return (
        <>
        {/* Link to the Devicon stylesheet in the head */}
          
          <section id="about" className="content-section">
            <h2>About Me</h2>
            <div className="about-container">
             <img src="/npg_pic.jpg" alt="Ninoska Peralta" className="profile-pic" />
              <div className="about-text">
                <p>I am a dedicated full-stack developer with a passion for building robust, end-to-end web applications. My expertise spans from crafting intuitive and responsive user interfaces to designing scalable, efficient back-end systems. With a strong command of modern web technologies and a commitment to clean, maintainable code, I transform complex ideas into seamless, functional user experiences.</p>
                
                <div className="resume-button-container">
                  <a href="/resume_main_cs.docx.pdf" download className="submit-button">Download My Resume</a>
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                  <h3>Tech Stack</h3>
                  <div style={{ fontSize: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <i className="devicon-html5-plain colored" title="HTML5"></i>
                    <i className="devicon-css3-plain colored" title="CSS3"></i>
                    <i className="devicon-javascript-plain colored" title="JavaScript"></i>
                    <i className="devicon-react-original colored" title="React"></i>
                    <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                    <i className="devicon-express-original colored" title="Express"></i>
                    <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                    <i className="devicon-git-plain colored" title="Git"></i>
                    <i className="devicon-github-original colored" title="GitHub"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
}

export default About;

