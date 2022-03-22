import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id='about' className='about-container' ref={this.props.aboutRefs.about}>
        <h2 className='nunito-900'>ABOUT</h2>
        <div className='about-text-container varela-round'>
          <p>
            Hello! My name is Daniel Pham and I&apos;m a Software Developer.
          </p>
          <p id='textOne' ref={this.props.aboutRefs.textOne}>
            My interest in coding began when I started an online Web Development course called The Odin Project.
            During the course, my first project was to recreate the Google homepage
            using only HTML and CSS. Completing this project was the moment that I realized
            I wanted to pursue programming as my career. I was addicted.
          </p>
          <p id='textTwo' ref={this.props.aboutRefs.textTwo}>
            Soon after, I had the opportunity to join a Web Development Bootcamp at LearningFuze.
            I put my life on hold and took the risk and it was the best decision I
            have made in my life. In such a short time, programming has become a passion of mine.
          </p>
          <p id='textThree' ref={this.props.aboutRefs.textThree}>
            Recently, I graduated from LearningFuze and have started looking for my first position
            as a Software Developer. I&apos;m hoping to find a company that shares the
            same mindset and values as I do and that will set me on the right trajactory as I begin my career.
          </p>
          <div className='about-button-container'>
            <a href='https://drive.google.com/file/d/1QWSQ65Qzn4Rjqv1AOek894Ow4oI2ekm9/view?usp=sharing' target='_blank' rel='noreferrer' className='icon-container'>RESUME</a>
          </div>
        </div>
      </div>
    );
  }
}
