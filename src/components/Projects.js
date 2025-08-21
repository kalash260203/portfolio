import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectsSection = projectsRef.current;
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid section-wrapper" ref={projectsRef}>
        <div className="project-card">
          <h3>Chatium</h3>
          <p className="project-tech">MongoDB • Express.js • React • Node.js • Socket.io</p>
          <p className="project-duration">January 2025 - Present</p>
          <ul>
            <li>Real-time chat application built with MERN stack featuring instant messaging capabilities.</li>
            <li>Implemented user authentication, real-time communication with Socket.io, and responsive design.</li>
            <li>Features include user registration/login, chat rooms, message history, and online status indicators.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/kalash260203/chatium-enhanced" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://chatiium.netlify.app/signup" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>ConvoBot</h3>
          <p className="project-tech">Next.js</p>
          <p className="project-duration">April 2024 - June 2024</p>
          <ul>
            <li>A web-based chat interface for interaction with an AI assistant called TalkBot.</li>
            <li>Simple, user-friendly design with message history display and input functionality.</li>
            <li>Built with vanilla JavaScript and modern web APIs for seamless user interaction.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/kalash260203/convo-bot" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://convo-bot.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>CodePilot</h3>
          <p className="project-tech">HTML5 • CSS3 • JavaScript • CodeMirror • Python</p>
          <p className="project-duration">December 2024 - Present</p>
          <ul>
            <li>Online code editor supporting multiple programming languages with real-time syntax highlighting.</li>
            <li>User-friendly interface with dark/light mode and input/output capabilities for code execution.</li>
            <li>Integrated CodeMirror library for enhanced code editing experience with auto-completion features.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/kalash260203/code-pilot" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://code-piolet.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Movie Recommendation System</h3>
          <p className="project-tech">MongoDB • Express.js • React • Node.js • Socket.io</p>
          <p className="project-duration">July 2023 - November 2023</p>
          <ul>
            <li>Developed a Dynamic Movie Recommendation Engine using MERN stack architecture.</li>
            <li>Built with MongoDB for data storage, Express.js for backend API, React for frontend, and Node.js runtime.</li>
            <li>Implemented collaborative filtering and content-based algorithms with real-time updates using Socket.io.</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/kalash260203/movie-recommendations-system" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://findmyfilms.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;