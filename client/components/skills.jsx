import React from 'react';

export default class Skills extends React.Component {

  render() {
    return (
      <div id='skills' className='skills-container' ref={this.props.skillsSectionRefs.skills}>
        <h2 className='nunito-900 fade-in' ref={this.props.skillsSectionRefs.header}>SKILLS</h2>
        <div className='row wrap justify-center skill-container-rows'>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.javascript}>
            <img src='images/javascript.svg' alt='JavaScript'></img>
            <h3 className='nunito-900'>JavaScript</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.html}>
            <img src='images/html.svg' alt='HTML5'></img>
            <h3 className='nunito-900'>HTML5</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.css}>
            <img src='images/css.svg' alt='CSS3'></img>
            <h3 className='nunito-900'>CSS3</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.react}>
            <img src='images/react.svg' alt='React'></img>
            <h3 className='nunito-900'>React.js</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.node}>
            <img src='images/nodejs.svg' alt='Node.js'></img>
            <h3 className='nunito-900'>Node.js</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.express}>
            <img className='white' src='images/express.svg' alt='Express'></img>
            <h3 className='nunito-900'>Express</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.skillsSectionRefs.postgres}>
            <img src='images/postgresql.svg' alt='PostgreSQL'></img>
            <h3 className='nunito-900'>PostgreSQL</h3>
          </div>
        </div>
      </div>
    );
  }
}
