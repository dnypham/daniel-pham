import React from 'react';

export default function Contact(props) {

  return (
    <form action='https://getform.io/f/6a889d2f-f3fb-4129-b952-d3cdb8ea6de9' method='POST'>
      <div className='contact-container'>
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
  );
}
