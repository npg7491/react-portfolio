import React from 'react';

// --- Project Data ---
// To add a new project, just add a new object to this array.
const projectData = [
    {
        title: "Project One",
        description: "A brief and engaging description of what this project is, what technologies it uses, and what problem it solves.",
        link: "#", // Replace with your actual project link (e.g., GitHub repo or live demo)
        imageUrl: "https://placehold.co/600x400/5e81ac/ffffff?text=Project+One"
    },
    {
        title: "Project Two",
        description: "This project showcases my ability to work with APIs and asynchronous JavaScript to create a dynamic user experience.",
        link: "#",
        imageUrl: "https://placehold.co/600x400/81a1c1/ffffff?text=Project+Two"
    },
    {
        title: "Project Three",
        description: "A full-stack application built with the MERN stack, featuring user authentication and a RESTful API.",
        link: "#",
        imageUrl: "https://placehold.co/600x400/88c0d0/ffffff?text=Project+Three"
    },
    {
        title: "Project Four",
        description: "This project focuses on front-end design principles and responsive layouts, ensuring a great look on all devices.",
        link: "#",
        imageUrl: "https://placehold.co/600x400/8fbcbb/ffffff?text=Project+Four"
    }
];


// This is a smaller component just for displaying a single project card.
const ProjectCard = ({ title, description, link, imageUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={`Screenshot of ${title}`} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};


// This is the main component that will be exported.
function Projects() {
    return (
        <>
            {/* Embedded styles for the projects section */}
            <style>{`
                .content-section {
                  padding: 4rem 2rem;
                  text-align: center;
                }
                .projects-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                  gap: 2rem;
                  margin-top: 2rem;
                  max-width: 1200px;
                  margin-left: auto;
                  margin-right: auto;
                }
                .project-card {
                  background-color: #ffffff;
                  border: 1px solid #e1e1e1;
                  border-radius: 8px;
                  overflow: hidden;
                  text-align: left;
                  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
                }
                .project-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .project-info {
                    padding: 1.5rem;
                }
                .project-info h3 {
                    margin-top: 0;
                    margin-bottom: 0.5rem;
                }
                .project-info p {
                    margin-bottom: 1rem;
                    color: #555;
                }
                .project-link {
                  display: inline-block;
                  background-color: #007bff;
                  color: white;
                  padding: 0.5rem 1rem;
                  border-radius: 5px;
                  text-decoration: none;
                  font-weight: bold;
                  transition: background-color 0.3s;
                }
                .project-link:hover {
                  background-color: #0056b3;
                }
            `}</style>

            <section id="projects" className="content-section">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {/* We map over the projectData array and render a card for each project */}
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Projects;