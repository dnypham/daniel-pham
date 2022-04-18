import React from 'react';

export default function About(props) {
  return (
    <div id='about' className='about-container' ref={props.aboutSectionRefs.about}>
      <h2 className='nunito-900 fade-in' ref={props.aboutSectionRefs.header}>ABOUT</h2>
      <div className='about-text-container varela-round fade-in from-bottom' ref={props.aboutSectionRefs.content}>
        <div className='about-content-container'>
          <p>
            My name is Daniel Pham and I&apos;m a Full Stack Web Developer currently located in Orange County, CA.
          </p>
          <p>
            I discovered programming through an online course called The Odin Project.
            My first project in the course was to recreate the Google Homepage and upon completing it,
            I was instantly addicted to the process. The Odin Project really piqued my interest in pursuing
            programming as a career. Soon after, I had an opportunity to join an Accelerated Web Development
            Program at LearningFuze and jumped on the opportunity to pursue my newfound passion.
          </p>
          <p>
            My time at LearningFuze cemented that programming will be my career path.
            I have gained knowledge and experience building full stack web applications using HTML,
            CSS, JavaScript, React, Node.js, Express, and PostgreSQL.
          </p>
          <p>
            I&apos;m now in the job market and I&apos;m excited to work for a company
            where I can continue to learn and expand my knowledge.
          </p>
        </div>
        <div className='about-button-container'>
          <a href='https://drive.google.com/file/d/1c-uFoM2qQFaxKjheC9IXCYWa5TgBid-_/view?usp=sharing' target='_blank' rel='noreferrer' className='icon-container nunito-800'>RESUME</a>
        </div>
      </div>
    </div>
  );
}
