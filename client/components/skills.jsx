import React from 'react';

export default class Skills extends React.Component {

  render() {
    return (
      <div id='skills' className='skills-container' ref={this.props.iconRefs.skills}>
        <h2 className='nunito-900'>SKILLS</h2>
        <div className='row wrap justify-center'>
          <div id='javascript' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.javascript}>
            <img src='images/javascript.svg'></img>
            <h3 className='nunito-900'>JavaScript</h3>
          </div>
          <div id='react' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.react}>
            <img src='images/react.svg'></img>
            <h3 className='nunito-900'>React.js</h3>
          </div>
          <div id='node' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.node}>
            <img src='images/nodejs.svg'></img>
            <h3 className='nunito-900'>Node.js</h3>
          </div>
          <div id='express' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.express}>
            <img className='white' src='images/express.svg'></img>
            <h3 className='nunito-900'>Express</h3>
          </div>
          <div id='postgres' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.postgres}>
            <img src='images/postgresql.svg'></img>
            <h3 className='nunito-900'>PostgreSQL</h3>
          </div>
          <div id='html' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.html}>
            <img src='images/html.svg'></img>
            <h3 className='nunito-900'>HTML5</h3>
          </div>
          <div id='express' className='skill-container fade-in from-bottom' ref={this.props.iconRefs.css}>
            <img src='images/css.svg'></img>
            <h3 className='nunito-900'>CSS3</h3>
          </div>
        </div>
      </div>
    );
  }
}
