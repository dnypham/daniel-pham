import React, { useState } from 'react';

export default function Projects(props) {
  const [isEventineraryHovered, setIsEventineraryHovered] = useState(false);
  const [isBrewDiscoveryHovered, setIsBrewDiscoveryHovered] = useState(false);

  return (
    <div id='projects' className='projects-container' ref={props.projectsSectionRefs.projects}>
      <h2 className='nunito-900 fade-in' ref={props.projectsSectionRefs.header}>PROJECTS</h2>
      <div className='project-container'>
        <div id='event' className='project fade-in from-left' ref={props.projectsSectionRefs.event}>
          <div className='image-container'>
            <img src={isEventineraryHovered ? 'assets/projects/eventinerary.gif' : 'assets/projects/eventinerary.png'} alt='Concert' onMouseEnter={() => setIsEventineraryHovered(true)} onMouseLeave={() => setIsEventineraryHovered(false)}></img>
          </div>
          <div className='project-text-container'>
            <h4 className='nunito-800'>EVENTINERARY</h4>
            <p className='varela-round'>A full stack React.js web application for event-goers who want to find events and create itineraries.</p>
          </div>
          <div className='project-skills-container'>
            <h4 className='nunito-800'>TECH</h4>
            <div className='tech-container'>
              <img src='assets/skills/react.svg'></img>
              <img src='assets/skills/javascript.svg'></img>
              <img src='assets/skills/nodejs.svg'></img>
              <img src='assets/skills/express.svg'></img>
              <img src='assets/skills/postgresql.svg'></img>
              <img src='assets/skills/html.svg'></img>
              <img src='assets/skills/css.svg'></img>
            </div>
          </div>
          <div className='button-container'>
            <a href='https://eventinerary.herokuapp.com/' target='_blank' rel='noreferrer' className='nunito-800'>LIVE DEMO</a>
            <a href='https://github.com/dnypham/eventinerary' target='_blank' rel='noreferrer' className='nunito-800'>SOURCE CODE</a>
          </div>
        </div>
      </div>
      <div className='project-container'>
        <div id='brew' className='project fade-in from-right' ref={props.projectsSectionRefs.brew}>
          <div className='image-container'>
            <img src={isBrewDiscoveryHovered ? 'assets/projects/brew-discovery.gif' : 'assets/projects/brew-discovery.png'} alt='Beer' onMouseEnter={() => setIsBrewDiscoveryHovered(true)} onMouseLeave={() => setIsBrewDiscoveryHovered(false)}></img>
          </div>
          <div className='project-text-container'>
            <h4 className='nunito-800'>BREW DISCOVERY</h4>
            <p className='varela-round'>A dynamic JavaScript, HTML5, and CSS3 web application for beer enthusiasts to discover new breweries.</p>
          </div>
          <div className='project-skills-container'>
            <h4 className='nunito-800'>TECH</h4>
            <div className='tech-container'>
              <img src='assets/skills/javascript.svg'></img>
              <img src='assets/skills/html.svg'></img>
              <img src='assets/skills/css.svg'></img>
            </div>
          </div>
          <div className='button-container'>
            <a href='https://dnypham.github.io/brew-discovery/' target='_blank' rel='noreferrer' className='nunito-800'>LIVE DEMO</a>
            <a href='https://github.com/dnypham/brew-discovery' target='_blank' rel='noreferrer' className='nunito-800'>SOURCE CODE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
