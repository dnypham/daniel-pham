import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <form action='https://getform.io/f/6a889d2f-f3fb-4129-b952-d3cdb8ea6de9' method='POST'>
          <div id="contact" className='contact-container' ref={this.props.contactRef}>
            <h2 className='nunito-900'>CONTACT</h2>
            <div className='contact'>
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
        <a href='https://www.linkedin.com/in/daniel-pham-10/' target='_blank' rel='noreferrer' className='icon-container'>
          <img className='white' src='images/linkedin.svg' />
        </a>
        <a href='https://github.com/dnypham' target='_blank' rel='noreferrer' className='icon-container'>
          <img className='white' src='images/github.svg' />
        </a>
      </div>
    </>
    );
  }
}
