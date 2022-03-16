import React from 'react';

export default function Footer(props) {
  return (
    <div className='footer-container'>
      <a href='https://www.linkedin.com/in/daniel-pham-10/' target='_blank' rel='noreferrer' className='icon-container'>
        <img className='white' src='images/linkedin.svg' />
      </a>
      <a href='https://github.com/dnypham' target='_blank' rel='noreferrer' className='icon-container'>
        <img className='white' src='images/github.svg' />
      </a>
    </div>
  );
}
