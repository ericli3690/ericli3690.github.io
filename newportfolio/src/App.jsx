import React, { useEffect, useRef, useState, createRef } from 'react';
import profilePicture from './assets/profile_picture_1.jpg'
import profilePictureBack from './assets/profile_picture_1.jpg'
import BackgroundSphere from './components/BackgroundSphere.jsx'
import projectsData from './projects.js';
import resumePDF from './assets/SongEricYuLiResumeApr2026.pdf';
import ProjectItem, { renderRichText } from './components/ProjectItem.jsx';
import { toma, sentry } from './coverletters.js';

function App() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [sideOffset, setSideOffset] = useState('0px');
  const [showChineseName, setShowChineseName] = useState(false);
  const [showSmileEmoji, setShowSmileEmoji] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(window.location.search.substring(1).split('&').includes('light') ? false : true);
  const [signatureAnimated, setSignatureAnimated] = useState(false);

  const projectsHeaderRef = useRef(null);
  const resumeHeaderRef = useRef(null);
    const contactHeaderRef = useRef(null);
  const skillsHeaderRef = useRef(null);
  const signatureRef = useRef(null);
  
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

  const handleSignatureClick = () => {
    const signatureStroke = signatureRef.current.querySelector('.signature-stroke');
    if (signatureStroke) {
      signatureStroke.style.transition = 'opacity 0.25s ease-out';
      signatureStroke.style.opacity = '0';
      
      // After fade out, reset and restart the drawing animation
      setTimeout(() => {
        // Clear
        signatureStroke.style.transition = 'none';
        signatureStroke.style.animation = 'none';
        // Reset
        signatureStroke.style.opacity = '0';
        signatureStroke.style.strokeDashoffset = '1081';
        // Force a reflow
        void signatureStroke.offsetHeight;
        // Set visibility
        signatureStroke.style.opacity = '1';
        // Wait a tiny bit for opacity to apply
        setTimeout(() => {
          signatureStroke.style.animation = 'drawSignature 7s ease-out forwards';
        }, 10);
      }, 250);
    }
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

  // Signature animation intersection observer
  useEffect(() => {
    if (!signatureRef.current || signatureAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !signatureAnimated) {
            const signatureStroke = signatureRef.current.querySelector('.signature-stroke');
            if (signatureStroke) {
              signatureStroke.style.animation = 'drawSignature 7s ease-out forwards';
              setSignatureAnimated(true);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    observer.observe(signatureRef.current);

    return () => {
      if (signatureRef.current) {
        observer.unobserve(signatureRef.current);
      }
    };
  }, [signatureAnimated]);

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
          <p className="by-line right-pulse-dot dark-red">&rarr;&nbsp;Award winner at <a href="https://devpost.com/ericli3690" target="_blank" rel="noopener noreferrer" className="inline red-text hover-offset bolded">six hackathons</a>.</p>
          <p className="by-line right-pulse-dot dark-blue">&rarr;&nbsp; Previously at <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset blue-text bolded">Ford</a>, <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset blue-text bolded">GSoC</a>, and <a href="https://toma.com/" target="_blank" rel="noopener noreferrer" className="inline hover-offset blue-text bolded">Toma</a>.</p>
        </div>

        <div className="cover-letter-container">
          <p className="cover-letter">{renderRichText(window.location.search.substring(1).split('&')[0] === 'toma' ? toma : '')}</p>
          <p className="cover-letter">{renderRichText(window.location.search.substring(1).split('&')[0] === 'sentry' ? sentry : '')}</p>
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

        {/* <div className="skills-container">
          <h3 className="fade-in-2" ref={skillsHeaderRef}>Skills</h3>
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
        </div> */}
        
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
          <svg ref={signatureRef} className="signature" viewBox="-10 -10 75 40" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleSignatureClick} style={{ cursor: 'pointer' }}>
            <path
            className="signature-stroke"
            strokeLinecap="round"
            d="M5.07648 8.81062C5.06782 8.81927 7.39094 8.72573 10.9226 8.37647C12.1467 8.25542 12.1368 7.72365 12.0378 7.03122C11.7983 5.35651 11.4637 2.79546 11.2981 0.55353C11.2622 0.0684358 9.96332 2.91816 8.3121 8.11497C7.45263 10.8199 6.85077 13.7537 5.85575 17.1316C4.86074 20.5096 3.56784 24.266 2.83794 26.3288C2.10805 28.3917 1.98033 28.6471 1.91183 28.5475C1.84332 28.4479 1.83789 27.9857 2.24782 26.1609C2.65776 24.3362 3.48324 21.163 4.42992 18.1856C5.3766 15.2083 6.41947 12.5229 5.90929 12.4373C2.34168 11.8387 0.843677 17.8475 0.70211 17.7656C-0.512028 17.0635 4.02093 13.7195 6.89433 10.7919C7.84258 9.8258 7.96623 10.133 7.9226 10.9731C7.71074 15.0521 7.64337 15.951 7.86356 16.2191C8.16966 16.5918 9.30154 15.2996 10.7453 13.0992C11.6255 11.7577 12.4932 9.76715 13.594 7.82156C14.6948 5.87597 15.9224 3.98644 16.5329 3.13518C17.1434 2.28392 17.0994 2.52818 16.8713 3.00073C15.4237 5.99976 13.5856 7.92742 13.9813 7.49187C15.7251 5.57262 17.0342 3.67383 17.6055 3.33454C18.0356 3.07916 18.1553 4.9534 18.4657 6.8824C18.5262 7.25864 19.2871 7.07035 19.9166 6.76562C21.3405 6.07635 22.7345 4.12668 23.7526 2.25952C24.0816 1.65617 23.7677 1.6261 23.3981 1.83041C22.4799 2.33802 21.1319 3.92014 19.5696 5.84046C18.4359 7.23397 17.9887 8.52098 17.3298 9.84918C16.3845 11.7545 15.3466 13.4547 14.7136 14.7976C14.0745 16.1537 13.2134 17.7721 12.1199 20.0781C9.48833 25.6277 7.56497 27.0045 7.24161 27.4397C7.08263 27.6537 8.36342 25.6559 10.3555 23.1666C12.5526 20.421 14.4194 19.1615 14.7592 19.274C17.2819 20.1089 13.1917 24.3499 13.2919 25.1876C13.7743 29.2194 20.2667 18.7317 20.5806 18.6589C20.9384 18.576 19.2419 22.0392 16.78 26.3893C15.9063 27.933 15.8162 28.1407 15.8651 28.1562C16.7633 28.4409 17.8035 25.3143 20.1285 21.3354C21.5695 18.8691 23.9115 15.721 25.6238 13.5269C27.3362 11.3327 28.4426 10.2456 29.469 9.36387C30.4954 8.48212 31.4082 7.83864 32.9699 6.98219C36.654 4.96172 39.3686 3.88617 39.8538 3.94353C40.0362 3.96508 39.6762 4.55061 36.7985 5.61233C33.9207 6.67406 28.4307 8.34232 23.9123 9.40175C19.394 10.4612 16.0136 10.8612 19.9638 10.5033C23.914 10.1454 35.2971 9.01741 41.9727 8.46575C48.6483 7.91409 50.2713 7.97291 43.4166 9.49556C36.5619 11.0182 21.1802 14.0029 13.1261 15.5932C5.07196 17.1834 4.81148 17.2889 9.4153 16.6552C14.0191 16.0215 23.4951 14.6455 30.1608 13.937C36.8266 13.2285 40.3948 13.2291 42.6169 13.2817C44.8389 13.3342 45.6065 13.4385 46.1043 13.5292C46.6021 13.6198 46.8068 13.6937 46.1166 13.9568C45.4265 14.22 43.8353 14.6702 39.5297 15.3818C35.2241 16.0933 28.2523 17.0525 22.8517 18.0121C17.4511 18.9716 13.833 19.9024 12.8275 20.1338C11.822 20.3653 13.5388 19.8692 17.5099 19.2185C21.481 18.5677 27.6545 17.7773 31.382 17.4442C36.1883 17.0148 37.6204 17.4923 37.9144 17.7066C38.0229 17.7857 37.6323 18.0264 35.0917 19.0425C32.5511 20.0585 27.7658 21.8994 24.5572 23.256C21.3485 24.6126 19.8615 25.4292 19.3803 25.7959C19.1629 25.9616 21.4525 25.2949 24.4096 24.0263C27.585 22.664 30.8867 22.0831 33.7304 22.0129C36.2482 21.9507 38.0461 23.4507 39.6224 24.5706C41.4086 25.8397 43.5562 25.584 45.3974 25.3893C48.1731 25.0957 51.2681 23.7409 54.7523 22.3674C56.7407 21.7356 59.1763 21.2364 60.6456 20.9631C62.1148 20.6898 62.5439 20.6575 62.9859 20.6242"
            />
          </svg>
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
