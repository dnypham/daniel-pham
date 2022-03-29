import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEventineraryHovered: false,
      isBrewDiscoveryHovered: false
    };
  }

  render() {
    return (
      <div id='projects' className='projects-container' ref={this.props.projectsSectionRefs.projects}>
        <h2 className='nunito-900 fade-in' ref={this.props.projectsSectionRefs.header}>PROJECTS</h2>
        <div className='project-container'>
          <div id='event' className='project fade-in from-left' ref={this.props.projectsSectionRefs.event}>
            <div className='image-container'>
              <img src={this.state.isEventineraryHovered ? 'images/eventinerary.gif' : 'images/eventinerary.png'} alt='Concert' onMouseEnter={() => this.setState({ isEventineraryHovered: true })} onMouseLeave={() => this.setState({ isEventineraryHovered: false })}></img>
            </div>
            <div className='project-text-container'>
              <h4 className='nunito-800'>EVENTINERARY</h4>
              <p className='varela-round'>A full stack React.js web application for event-goers who want to find events and create itineraries.</p>
            </div>
            <div className='project-skills-container'>
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
            </div>
            <div className='button-container'>
              <a href='https://eventinerary.herokuapp.com/' target='_blank' rel='noreferrer' className='nunito-800'>LIVE DEMO</a>
              <a href='https://github.com/dnypham/eventinerary' target='_blank' rel='noreferrer' className='nunito-800'>SOURCE CODE</a>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div id='brew' className='project fade-in from-right' ref={this.props.projectsSectionRefs.brew}>
            <div className='image-container'>
              <img src={this.state.isBrewDiscoveryHovered ? 'images/brew-discovery.gif' : 'images/brew-discovery.png'} alt='Beer' onMouseEnter={() => this.setState({ isBrewDiscoveryHovered: true })} onMouseLeave={() => this.setState({ isBrewDiscoveryHovered: false })}></img>
            </div>
            <div className='project-text-container'>
              <h4 className='nunito-800'>BREW DISCOVERY</h4>
              <p className='varela-round'>A dynamic JavaScript, HTML5, and CSS3 web application for beer enthusiasts to discover new breweries.</p>
            </div>
            <div className='project-skills-container'>
              <h4 className='nunito-800'>TECH</h4>
              <div className='tech-container'>
                <img src='images/javascript.svg'></img>
                <img src='images/html.svg'></img>
                <img src='images/css.svg'></img>
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
}
