import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
      <div className='projects-container'>
        <h2 className='nunito-900'>PROJECTS</h2>
        <div className='project-container'>
          <div className='project'>
            <div className='image-container'>
              <img src='images/eventinerary.jpg'></img>
            </div>
            <h4 className='nunito-800'>EVENTINERARY</h4>
            <p className='varela-round'>A full stack React.js web application for event-goers who want to find events and create itineraries.</p>
            <h4 className='nunito-800'>TECH</h4>
            <div className='tech-container'>
              <img src='images/react.svg'></img>
              <img src='images/nodejs.svg'></img>
              <img src='images/express.svg'></img>
              <img src='images/postgresql.svg'></img>
              <img src='images/javascript.svg'></img>
              <img src='images/html.svg'></img>
              <img src='images/css.svg'></img>
            </div>
            <div className='button-container'>
              <button className='nunito-800'>LIVE DEMO</button>
              <button className='nunito-800'>SOURCE CODE</button>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='project'>
            <div className='project'>
              <div className='image-container'>
                <img src='images/brew-discovery.jpg'></img>
              </div>
              <h4 className='nunito-800'>BREW DISCOVERY</h4>
              <p className='varela-round'>A dynamic JavaScript, HTML5, and CSS3 web application for beer enthusiasts to discover new breweries.</p>
              <h4 className='nunito-800'>TECH</h4>
              <div className='tech-container'>
                <img src='images/javascript.svg'></img>
                <img src='images/html.svg'></img>
                <img src='images/css.svg'></img>
              </div>
              <div className='button-container'>
                <button className='nunito-800'>LIVE DEMO</button>
                <button className='nunito-800'>SOURCE CODE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
