import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id='about' className='about-container' ref={this.props.aboutSectionRefs.about}>
        <h2 className='nunito-900 fade-in' ref={this.props.aboutSectionRefs.header}>ABOUT</h2>
        <div className='about-text-container varela-round fade-in from-bottom' ref={this.props.aboutSectionRefs.content}>
          <div className='about-content-container'>
            <p>
              Hello! My name is Daniel Pham and I&apos;m a Software Developer.
            </p>
            <p>
              My interest in coding began when I started an online Web Development course called The Odin Project.
              During the course, my first project was to recreate the Google homepage
              using only HTML and CSS. Completing this project was the moment that I realized
              I wanted to pursue programming as my career. I was addicted.
            </p>
            <p>
              Soon after, I had the opportunity to join a Web Development Bootcamp at LearningFuze.
              I put my life on hold and took the risk and it was the best decision I
              have made in my life. In such a short time, programming has become a passion of mine.
            </p>
            <p>
              Recently, I graduated from LearningFuze and have started looking for my first position
              as a Software Developer. I&apos;m hoping to find a company that shares the
              same mindset and values as I do and that will set me on the right trajactory as I begin my career.
            </p>
          </div>
          <div className='about-button-container'>
            <a href='https://drive.google.com/file/d/1QWSQ65Qzn4Rjqv1AOek894Ow4oI2ekm9/view?usp=sharing' target='_blank' rel='noreferrer' className='icon-container'>RESUME</a>
          </div>
        </div>
      </div>
    );
  }
}
