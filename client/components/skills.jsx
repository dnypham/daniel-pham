import React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
      <div id='skills' className='skills-container' ref={this.props.sectionRef}>
        <h2 className='nunito-900'>SKILLS</h2>
        <div className='row wrap'>
          <div className='skill-container'>
            <img src='images/javascript.svg'></img>
            <h3 className='nunito-900'>JavaScript</h3>
          </div>
          <div className='skill-container'>
            <img src='images/react.svg'></img>
            <h3 className='nunito-900'>React.js</h3>
          </div>
          <div className='skill-container'>
            <img src='images/nodejs.svg'></img>
            <h3 className='nunito-900'>Node.js</h3>
          </div>
          <div className='skill-container'>
            <img className='white' src='images/express.svg'></img>
            <h3 className='nunito-900'>Express</h3>
          </div>
          <div className='skill-container'>
            <img src='images/postgresql.svg'></img>
            <h3 className='nunito-900'>PostgreSQL</h3>
          </div>
          <div className='skill-container'>
            <img src='images/html.svg'></img>
            <h3 className='nunito-900'>HTML5</h3>
          </div>
          <div className='skill-container'>
            <img src='images/css.svg'></img>
            <h3 className='nunito-900'>CSS3</h3>
          </div>
        </div>
      </div>
    );
  }
}
