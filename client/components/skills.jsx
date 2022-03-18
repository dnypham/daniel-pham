import React from 'react';

export default class Skills extends React.Component {
  render() {
    return (
      <div id='skills' className='skills-container' ref={this.props.sectionRef}>
        <h2 className='nunito-900'>SKILLS</h2>
        <div className='row wrap'>
          <div className='skill-container'>
            <img className={`opacity-0 trans-1 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/javascript.svg'></img>
            <h3 className='nunito-900'>JavaScript</h3>
          </div>
          <div className='skill-container'>
            <img className={`opacity-0 trans-2 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/react.svg'></img>
            <h3 className='nunito-900'>React.js</h3>
          </div>
          <div className='skill-container'>
            <img className={`opacity-0 trans-3 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/nodejs.svg'></img>
            <h3 className='nunito-900'>Node.js</h3>
          </div>
          <div className='skill-container'>
            <img className={`white opacity-0 trans-4 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/express.svg'></img>
            <h3 className='nunito-900'>Express</h3>
          </div>
          <div className='skill-container'>
            <img className={`opacity-0 trans-5 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/postgresql.svg'></img>
            <h3 className='nunito-900'>PostgreSQL</h3>
          </div>
          <div className='skill-container'>
            <img className={`opacity-0 trans-6 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/html.svg'></img>
            <h3 className='nunito-900'>HTML5</h3>
          </div>
          <div className='skill-container'>
            <img className={`opacity-0 trans-7 ${this.props.isActive === 'skills' ? 'opacity-1' : ''}`} src='images/css.svg'></img>
            <h3 className='nunito-900'>CSS3</h3>
          </div>
        </div>
      </div>
    );
  }
}
