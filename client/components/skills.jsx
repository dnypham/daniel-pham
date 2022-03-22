import React from 'react';

export default class Skills extends React.Component {

  render() {
    return (
      <div id='skills' className='skills-container' ref={this.props.skillsRefs.skills}>
        <h2 className='nunito-900'>SKILLS</h2>
        <div className='row wrap justify-center'>
          <div id='javascript' className='skill-container opacity-0' ref={this.props.skillsRefs.javascript}>
            <img src='images/javascript.svg'></img>
            <h3 className='nunito-900'>JavaScript</h3>
          </div>
          <div id='react' className='skill-container opacity-0' ref={this.props.skillsRefs.react}>
            <img src='images/react.svg'></img>
            <h3 className='nunito-900'>React.js</h3>
          </div>
          <div id='node' className='skill-container opacity-0' ref={this.props.skillsRefs.node}>
            <img src='images/nodejs.svg'></img>
            <h3 className='nunito-900'>Node.js</h3>
          </div>
          <div id='express' className='skill-container opacity-0' ref={this.props.skillsRefs.express}>
            <img className='white' src='images/express.svg'></img>
            <h3 className='nunito-900'>Express</h3>
          </div>
          <div id='postgres' className='skill-container opacity-0' ref={this.props.skillsRefs.postgres}>
            <img src='images/postgresql.svg'></img>
            <h3 className='nunito-900'>PostgreSQL</h3>
          </div>
          <div id='html' className='skill-container opacity-0' ref={this.props.skillsRefs.html}>
            <img src='images/html.svg'></img>
            <h3 className='nunito-900'>HTML5</h3>
          </div>
          <div id='express' className='skill-container opacity-0' ref={this.props.skillsRefs.css}>
            <img src='images/css.svg'></img>
            <h3 className='nunito-900'>CSS3</h3>
          </div>
        </div>
      </div>
    );
  }
}
