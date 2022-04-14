import React from 'react';

export default function Skills(props) {

  return (
    <div id='skills' className='skills-container' ref={props.skillsSectionRefs.skills}>
      <h2 className='nunito-900 fade-in' ref={props.skillsSectionRefs.header}>SKILLS</h2>
      <div className='row wrap justify-center skill-container-rows'>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.javascript}>
          <img src='assets/skills/javascript.svg' alt='JavaScript'></img>
          <h3 className='nunito-900'>JavaScript</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.html}>
          <img src='assets/skills/html.svg' alt='HTML5'></img>
          <h3 className='nunito-900'>HTML5</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.css}>
          <img src='assets/skills/css.svg' alt='CSS3'></img>
          <h3 className='nunito-900'>CSS3</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.react}>
          <img src='assets/skills/react.svg' alt='React'></img>
          <h3 className='nunito-900'>React.js</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.node}>
          <img src='assets/skills/nodejs.svg' alt='Node.js'></img>
          <h3 className='nunito-900'>Node.js</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.express}>
          <img className='white' src='assets/skills/express.svg' alt='Express'></img>
          <h3 className='nunito-900'>Express</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.skillsSectionRefs.postgres}>
          <img src='assets/skills/postgresql.svg' alt='PostgreSQL'></img>
          <h3 className='nunito-900'>PostgreSQL</h3>
        </div>
      </div>
    </div>
  );
}
