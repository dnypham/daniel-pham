import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id='about' className='about-container' ref={this.props.sectionRef.about}>
        <h2 className='nunito-900'>ABOUT</h2>
        <div className='about-text-container varela-round'>
          <p id='textOne' ref={this.props.sectionRef.textOne}>
            I started coding using an online resource called &quot;The Odin Project&quot;.
            As I was working through the curriculum, I created a copy of the Google homepage
            as a project and I was instantly addicted to the process. Soon after, I had an
            opportunity to join a Full-Immersion Web Development Program at LearningFuze and
            jumped on the opportunity to pursue my new found passion.
          </p>
          <p id='textTwo' ref={this.props.sectionRef.textTwo}>
            At LearningFuze, I dedicated 10+ hours a day over 14 weeks to learning
            new technologies, such as JavaScript (ES5/ES6), Node.js, React, and more.
            I have been able to apply these technologies to create projects in a work-like
            environment. In such a short time, my passion for coding had substantially increased.
          </p>
          <p id='textThree' ref={this.props.sectionRef.textThree}>
            I recently graduated from LearningFuze and have begun my job search.
            I&apos;m excited to work for a company where I can continue to learn and expand my knowledge.
          </p>
          <div className='about-button-container'>
            <a href='https://drive.google.com/file/d/1QWSQ65Qzn4Rjqv1AOek894Ow4oI2ekm9/view?usp=sharing' target='_blank' rel='noreferrer' className='icon-container'>RESUME</a>
          </div>
        </div>
      </div>
    );
  }
}
