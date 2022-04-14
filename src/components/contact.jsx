import React, { useState } from 'react';

export default function Contact(props) {
  const [isLinkedInRotating, setIsLinkedInRotating] = useState(false);
  const [isGitHubRotating, setIsGitHubRotating] = useState(false);

  return (
    <>
      <form action='https://getform.io/f/6a889d2f-f3fb-4129-b952-d3cdb8ea6de9' method='POST'>
        <div id="contact" className='contact-container' ref={props.contactSectionRefs.contact}>
          <h2 className='nunito-900 fade-in' ref={props.contactSectionRefs.header}>CONTACT</h2>
          <div id='contact-form' className='contact fade-in' ref={props.contactSectionRefs.contactForm}>
            <input
              required
              type='text'
              name="name"
              placeholder='Name'
            />
            <input
              required
              type='text'
              name="email"
              placeholder='Enter email'
            />
            <textarea
              required
              type='text'
              name="message"
              placeholder='Your Message'
            />
            <div className='submit-container'>
              <button className='nunito-800' type='submit'>SUBMIT</button>
            </div>
          </div>
        </div>
      </form >
      <div className='footer-container'>
        <a href='https://www.linkedin.com/in/daniel-pham-10/' target='_blank' rel='noreferrer' className={`icon-container ${isLinkedInRotating ? 'rotate' : ''}`} onMouseEnter={() => setIsLinkedInRotating(true)} onMouseLeave={() => setIsLinkedInRotating(false)}>
        <img className='white' src='assets/linkedin.svg' />
      </a>
        <a href='https://github.com/dnypham' target='_blank' rel='noreferrer' className={`icon-container ${isGitHubRotating ? 'rotate' : ''}`} onMouseEnter={() => setIsGitHubRotating(true)} onMouseLeave={() => setIsGitHubRotating(false)}>
        <img className='white' src='assets/tools/github.svg' />
      </a>
    </div>
  </>
  );
}
