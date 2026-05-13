import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import profileImg from './assets/me.jpg'
import bckgImg from './assets/section1.heic'
import resume from './assets/my-resume.pdf'

function App() {
  // -------- PROJECTS DATA SETUP -----------
  // Array of Project objects, easy to update when adding more.
  const ALL_PROJECTS = [
    {
      title: "Bitcoin Price Prediction",
      tools: "Tools used here",
      description: "Description here :)"
    },
    {
      title: "Personalized Advertisement Solution",
      tools: "Tools used here",
      description: "Description here :)"
    },
    {
      title: "ISS - AI Support Assistant (In Progress)",
      tools: "Tools used here",
      description: "Description here :)"
    }
  ];

  // ------- PROJECTS STATE MANAGEMENT ------------
  // The default project to display is the first one (Bitcoin, index 0).
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Derive the active project data based on the index in state.
  const activeProject = ALL_PROJECTS[activeProjectIndex];

  // -------- HELPER FUNCTIONS ------------
  // Download Resume button
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'VedikaNatani_Resume.pdf';
    link.click();
  };

  // ------- COMPONENT UI RENDERING ----------
  return (
    <div className="portfolio-container">

      {/* GLOBAL NAVBAR (Top-Right Links: ABOUT PROJECTS) */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#about" className="nav-item salmon-text font-serif-small">ABOUT</a>
          <a href="#projects" className="nav-item salmon-text font-serif-small">PROJECTS</a>
        </div>
      </nav>

      {/* SECTION 1 (Background, Centered Large Name) */}
      <section className="intro-section" style={{ backgroundImage: `url(${bckgImg})` }}>
        <h1 className="intro-name font-display-large">Vedika Natani</h1>
      </section>

      {/* SECTION 2 (2-Column, Intro Text & Profile Photo) */}
      <section id="about" className="about-section max-width-content">
        
        {/* Left Column: Text & Icons */}
        <div className="about-text-column">
          <p className="intro-paragraph font-sans-body">
            <span className="salmon-text">Hello!</span> I'm a Data Science, Information Science, and CS student at UW-Madison who is interested in how AI and data can be used in areas like healthcare and finance. I like exploring how smart technology can improve everyday decisions and solve various social issues.
          </p>
          
          <div className="about-actions">
            <button 
              className="download-resume-btn font-sans-body border-salmon text-grey-dark"
              onClick={handleDownloadResume}
            >
              Download Resume
            </button>
            <div className="social-links-row">
              {/* Using SVG/Font placeholders for LinkedIn and GitHub icons */}
              <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="social-icon">in</a>
              <a href="https://github.com/natanivedika" target="_blank" rel="noopener noreferrer" className="social-icon">gh</a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="profile-image-column">
          <img 
            src={profileImg} 
            alt="Vedika Natani Profile Photo" 
            className="profile-photo"
          />
        </div>
      </section>

      {/* Projects Section: Yellow border + Interactive Project Buttons */}
      <section id="projects" className="projects-wrapper max-width-content">
        <div className="projects-container border-pale-yellow-outer">
          
          <header className="projects-header text-center">
            <h4 className="label-text text-grey-medium">Recent</h4>
            <h2 className="section-title salmon-text font-serif-small uppercase">Projects</h2>
          </header>

          {/* Project selector row */}
          <div className="project-buttons-row">
            {ALL_PROJECTS.map((project, index) => (
              <button
                key={project.title}

                // Dynamically apply the 'active-button' class if this is the selected project
                className={`project-select-btn font-sans-body border-red-thin text-grey-dark ${activeProjectIndex === index ? 'active-button' : ''}`}
                onClick={() => setActiveProjectIndex(index)}
              >
                {project.title}
              </button>
            ))}
          </div>

          {/* Dynamic project description */}
          <div className="project-details-card font-sans-body">
            <h3 className="project-detail-title">{activeProject.title}</h3>
            
            {/* Tools field: tools used for each project */}
            {activeProject.tools && (
              <p className="project-detail-tools text-grey-medium">
                <strong>Tools Used:</strong> {activeProject.tools}
              </p>
            )}

            <p className="project-detail-desc text-grey-dark">
              {activeProject.description}
            </p>
          </div>
          
        </div>
      </section>

    </div>
  )
}

export default App
