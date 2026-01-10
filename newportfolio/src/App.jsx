import React, { useEffect, useRef, useState, createRef } from 'react';
import profilePicture from './assets/profile_picture_1.jpg'
import profilePictureBack from './assets/SongEricYuLiZoomedIn.jpg'
import BackgroundSphere from './components/BackgroundSphere.jsx'
import projectsData from './projects.js';
import resumePDF from './assets/SongEricYuLiResumeJanuary2026.pdf';
import ProjectItem, { renderRichText } from './components/ProjectItem.jsx';
import skillsData from './skills.js';
import { toma } from './coverletters.js';

function App() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [sideOffset, setSideOffset] = useState('0px');
  const [showChineseName, setShowChineseName] = useState(false);
  const [showSmileEmoji, setShowSmileEmoji] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(window.location.search.substring(1).split('&').includes('light') ? false : true);

  const projectsHeaderRef = useRef(null);
  const resumeHeaderRef = useRef(null);
    const contactHeaderRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  
  // Create refs for each project item
  const projectRefs = useRef(projectsData.map(() => createRef()));

  const handleNameClick = () => {
    setShowChineseName(true);
    setTimeout(() => {
      setShowChineseName(false);
    }, 2000);
  };
  
  const handleNicknameClick = () => {
    setShowSmileEmoji(true);
    setTimeout(() => {
      setShowSmileEmoji(false);
    }, 2000);
  };

  useEffect(() => {
    const updateSideElementsPosition = () => {
      const rootElement = document.getElementById('root');
      if (!rootElement) return;
      
      const rootRect = rootElement.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      
      // If there's space between root and right edge
      if (rootRect.right < windowWidth - 140) { // Minimum space needed
        // Position in the middle between the root's right edge and window's right edge
        const offsetDistance = ((windowWidth - rootRect.right) / 3) + 'px';
        setSideOffset(offsetDistance);
        setShowIndicator(true);
      } else {
        setShowIndicator(false);
      }
    };

    // Initial update
    updateSideElementsPosition();

    // Update on resize
    window.addEventListener('resize', updateSideElementsPosition);
    
    return () => window.removeEventListener('resize', updateSideElementsPosition);
  }, []);
  
  // Set up intersection observer to detect which project is currently in view
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // At least 50% of the element must be visible
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the index of the project being observed
        const index = projectRefs.current.findIndex(ref => ref.current === entry.target);
        
        // If the project is in the viewport and is intersecting, set it as active
        if (index !== -1 && entry.isIntersecting) {
          setActiveProjectIndex(index);
        } else if (index === activeProjectIndex && !entry.isIntersecting) {
          // If the active project is no longer in view, we'll unset the active index
          // Only unset if no other project becomes active in the same batch of observations
          const stillSomeIntersecting = entries.some(e => e.isIntersecting && e.target !== entry.target);
          if (!stillSomeIntersecting) {
            setActiveProjectIndex(null);
          }
        }
      });
    }, options);
    
    // Observe all project elements
    projectRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    // Cleanup: stop observing elements when component unmounts
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [activeProjectIndex]);
  
  // Function to scroll to a specific project when its dot is clicked
  const scrollToProject = (index) => {
    if (projectRefs.current[index] && projectRefs.current[index].current) {
      projectRefs.current[index].current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // h3 scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const headers = [projectsHeaderRef, skillsHeaderRef, resumeHeaderRef];
      // Trigger when the element's top is above this point in the viewport
      const triggerPointOne = window.innerHeight * 0.4;
      const triggerPointTwo = window.innerHeight * 0.7;

      headers.forEach(ref => {
        if (ref.current) {
          const { top } = ref.current.getBoundingClientRect();
          if (top < triggerPointOne) {
            ref.current.classList.add('scrolled-past');
          } else {
            ref.current.classList.remove('scrolled-past');
          }
        }
      });

      if (contactHeaderRef.current) {
        const { top } = contactHeaderRef.current.getBoundingClientRect();
        if (top < triggerPointTwo) {
          contactHeaderRef.current.classList.add('scrolled-past');
        } else {
          contactHeaderRef.current.classList.remove('scrolled-past');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check position on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id="app-container" className={darkMode ? 'dark-mode' : ''}>
        <div className={`dark-mode-hint ${darkMode ? 'dark-mode' : ''}`}>
          Try me!
        </div>
        <BackgroundSphere />
        <div className="header-container">
          <div className="profile-picture-container" id="profile-picture-container">
            <img src={profilePicture} alt="Eric Li" className="profile-picture" />
            <img src={profilePictureBack} alt="Eric Li Back" className="profile-picture-back" />
          </div>
          <div className="header-text">
            <h1>Hi, I'm <div 
              onClick={handleNameClick} 
              className={`inline hover-offset bolded name-clickable ${showChineseName ? 'show-chinese' : ''}`}
            >Song Yu Li.</div></h1>
            <h2>But you can call me <div 
              onClick={handleNicknameClick} 
              className={`inline hover-offset blue-name bolded nickname-clickable ${showSmileEmoji ? 'show-emoji' : ''}`}
            >Eric</div>.</h2>
          </div>
        </div>

        <div className="by-lines">
          <p className="by-line right-pulse-dot dark-yellow">&rarr;&nbsp; Computer Science student at <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="inline hover-offset yellow-text bolded">UWaterloo</a>.</p>
          <p className="by-line right-pulse-dot dark-blue">&rarr;&nbsp; Previously at <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset blue-text bolded">Ford</a>, <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset blue-text bolded">GSoC</a>.</p>
          <p className="by-line right-pulse-dot dark-red">&rarr;&nbsp; Software Engineer Intern at <a href="https://www.toma.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset red-text bolded">Toma</a>.</p>
        </div>

        <div className="cover-letter-container">
          <p className="cover-letter">{renderRichText(window.location.search.substring(1).split('&')[0] === 'toma' ? toma : '')}</p>
        </div>

        <div className="content-container">
          <h3 className="fade-in-2" ref={projectsHeaderRef}>Projects</h3>
          
          <div className="projects-container fade-in-3">
            {projectsData.map((project, index) => (
              <div key={index} ref={projectRefs.current[index]}>
                <ProjectItem project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="skills-container">
          <h3 className="fade-in-2" ref={skillsHeaderRef}>Skills</h3>
          {/* <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">
                  <img src={skill.image} alt={skill.title} />
                </div>
                <div className="skill-name">{skill.title}</div>
              </div>
            ))}
          </div> */}
          <div className="skills-list-container">
            <div className="skills-list">
              {skillsData.map((skill, index) => (
                <p 
                  className={`skills-line ${index % 2 === 0 ? 'right-pulse-dot' : 'left-pulse-dot'} ${skill.color}`} 
                  key={index}
                >
                  {skill.title}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="resume-container">
          <h3 className="fade-in-2" ref={resumeHeaderRef}>Resume</h3>
          <div className="resume">
            <object className="pdf" data={resumePDF}>
              <embed src={resumePDF} />
              <p className="pdf-warning">This browser does not support PDFs. Please <a href={resumePDF} download>download the PDF</a> to view it.</p>
            </object>
          </div>
        </div>

        <div className="contact-container" id="contact-container">
          <h3 className="fade-in-2" ref={contactHeaderRef}>Contact</h3>
          <p>Open to work and actively searching for opportunities.<br />Feel free to reach out.</p>
          <div className="contact-links">
            <a href="mailto:ericli3690@gmail.com" className="contact-link right-pulse-dot fade-in-3">
            &rarr;&nbsp; ericli3690@gmail.com
            </a>
            <a href="tel:+14035616028" className="contact-link right-pulse-dot fade-in-3">
            &rarr;&nbsp; +1 (403) 561-6028
            </a>
            <a href="https://github.com/ericli3690" target="_blank" rel="noopener noreferrer" className="contact-link right-pulse-dot fade-in-3">
            &rarr;&nbsp; github.com/ericli3690
            </a>
            <a href="https://www.linkedin.com/in/song-eric-li/" target="_blank" rel="noopener noreferrer" className="contact-link right-pulse-dot fade-in-3">
            &rarr;&nbsp; linkedin.com/in/song-eric-li
            </a>
          </div>
        </div>
        <div className="footer-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <a href='https://cs.uwatering.com/#https://ericli3690.github.io/?nav=prev'>←</a>
              <a href='https://cs.uwatering.com/#https://ericli3690.github.io/' target='_blank'>
                  <img
                      src={darkMode ? 'https://cs.uwatering.com/icon.white.svg' : 'https://cs.uwatering.com/icon.black.svg'}
                      alt='CS Webring'
                      style={{ width: '24px', height: 'auto', opacity: 0.8 }}
                  />
              </a>
              <a href='https://cs.uwatering.com/#https://ericli3690.github.io/?nav=next'>→</a>
            </div>
        </div>
      </div>
      {showIndicator && (
        <div className="left-links-bar" style={{ left: sideOffset }}>
          <a className="icon-link" href="#contact-container" aria-label="Email">
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z" />
            </svg>
          </a>
          <a className="icon-link" href="#contact-container" aria-label="Phone">
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.62,10.79C8.06,13.62,10.38,15.94,13.21,17.38L15.41,15.18C15.69,14.9,16.08,14.82,16.43,14.93C17.55,15.3,18.75,15.5,20,15.5A1,1,0,0,1,21,16.5V20A1,1,0,0,1,20,21A17,17,0,0,1,3,4A1,1,0,0,1,4,3H7.5A1,1,0,0,1,8.5,4C8.5,5.25,8.7,6.45,9.07,7.57C9.18,7.92,9.1,8.31,8.82,8.59L6.62,10.79Z" />
            </svg>
          </a>
          <a className="icon-link" href="https://github.com/ericli3690" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
            </svg>
          </a>
          <a className="icon-link" href="https://www.linkedin.com/in/song-eric-li/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19,3A2,2,0,0,1,21,5V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3H19M18.5,18.5V13.2A3.26,3.26,0,0,0,15.24,9.9a3.17,3.17,0,0,0-2.32.95V10.13H9.5V18.5h3.4V13.57c0-.9.18-1.56,1.3-1.56s1.3.86,1.3,1.56V18.5Z M6.88,8.56A1.68,1.68,0,0,0,8.56,6.88,1.69,1.69,0,0,0,6.88,5.19,1.69,1.69,0,0,0,5.19,6.88,1.68,1.68,0,0,0,6.88,8.56M8.27,18.5V10.13H5.21V18.5Z" />
            </svg>
          </a>
        </div>
      )}
      {/* Dark mode toggle button */}
      <button 
        className={`dark-mode-toggle ${darkMode ? 'dark-mode' : ''}`} 
        onClick={toggleDarkMode} 
        aria-label="Toggle dark mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="moon-icon">
          <path d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"/>
        </svg>
      </button>

      {showIndicator && (
        <div className="right-scroll-indicator" style={{ right: sideOffset }}>
          {projectsData.map((_, index) => (
            <div 
              key={index} 
              className={`right-scroll-dot ${activeProjectIndex === index ? 'active' : ''}`}
              onClick={() => scrollToProject(index)}
            ></div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
