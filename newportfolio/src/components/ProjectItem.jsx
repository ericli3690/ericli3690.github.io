import React, { useState } from 'react';

// Method to handle rich text formatting
export const renderRichText = (text) => {
  if (!text) return null;

  // Process the text sequentially for all formatting types
  const processedText = [];
  let remainingText = text;
  let key = 0;

  // Process the text until no more formatting tags are found
  while (remainingText.length > 0) {
    // Check for the next formatting tag
    const boldMatch = remainingText.match(/\[b:(.*?)\]/);
    const italicMatch = remainingText.match(/\[i:(.*?)\]/);
    const linkMatch = remainingText.match(/\[link:(.*?)\|(.*?)\]/);
    const newlineMatch = remainingText.match(/\[n\]/);
    const tabMatch = remainingText.match(/\[t\]/);
    
    // Find the earliest match
    let earliestMatch = null;
    let matchType = null;
    let matchData = null;

    if (boldMatch) {
      earliestMatch = boldMatch;
      matchType = 'bold';
      matchData = { text: boldMatch[1] };
    }

    if (italicMatch && (!earliestMatch || remainingText.indexOf(italicMatch[0]) < remainingText.indexOf(earliestMatch[0]))) {
      earliestMatch = italicMatch;
      matchType = 'italic';
      matchData = { text: italicMatch[1] };
    }

    if (linkMatch && (!earliestMatch || remainingText.indexOf(linkMatch[0]) < remainingText.indexOf(earliestMatch[0]))) {
      earliestMatch = linkMatch;
      matchType = 'link';
      matchData = { text: linkMatch[1], url: linkMatch[2] };
    }

    if (newlineMatch && (!earliestMatch || remainingText.indexOf(newlineMatch[0]) < remainingText.indexOf(earliestMatch[0]))) {
      earliestMatch = newlineMatch;
      matchType = 'newline';
    }
    
    if (tabMatch && (!earliestMatch || remainingText.indexOf(tabMatch[0]) < remainingText.indexOf(earliestMatch[0]))) {
      earliestMatch = tabMatch;
      matchType = 'tab';
    }
    
    if (earliestMatch) {
      // Add text before the match
      const beforeText = remainingText.substring(0, remainingText.indexOf(earliestMatch[0]));
      if (beforeText) {
        processedText.push(<span key={key++}>{beforeText}</span>);
      }
      
      // Add the formatted content
      switch (matchType) {
        case 'bold':
          processedText.push(<strong className="intense-bold" key={key++}>{matchData.text}</strong>);
          break;
        case 'italic':
          processedText.push(<em key={key++}>{matchData.text}</em>);
          break;
        case 'link':
          processedText.push(
            <a key={key++} href={matchData.url} target="_blank" rel="noopener noreferrer" className="inline hover-offset">
              {matchData.text}
            </a>
          );
          break;
        case 'newline':
          processedText.push(<br key={key++}/>);
          break;
        case 'tab':
          processedText.push(<span key={key++}>&nbsp;&nbsp;&nbsp;&nbsp;</span>);
          break;
      }
      
      // Update the remaining text
      remainingText = remainingText.substring(remainingText.indexOf(earliestMatch[0]) + earliestMatch[0].length);
    } else {
      // No more formatting tags, add the remaining text
      processedText.push(<span key={key++}>{remainingText}</span>);
      break;
    }
  }
  
  return processedText;
};

const ProjectItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert hex color to RGB format
  const hexToRgb = (hex) => {
    // Remove the hash if it exists
    hex = hex.replace('#', '');
    
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
    
    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  };
  // Get RGB values from the project's color
  const rgbColor = project.color ? hexToRgb(project.color) : '187, 187, 187';

  return (
    <div className="project-tile">
      <div 
        className="tile-section"
        style={{ '--project-border-color': `rgb(${rgbColor})` }}
      >
        <div className={`image-slice ${isHovered ? 'squeeze' : ''}`}>
          <img src={project.image} alt={project.title} />
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="button-slice-link"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="button-slice" 
            style={{ '--project-color-rgb': rgbColor }}
          >
            <div className="arrow-text">&rarr;</div>
          </div>
        </a>
      </div>
      <div className="text-section">
        <div className="project-title-container">
          <h4 className="project-title">{project.title}</h4>
          <div className="project-title-bar"></div>
          <h5 className="project-year">{project.year}</h5>
        </div>
        <p className="project-description">
          {renderRichText(project.description)}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem; 