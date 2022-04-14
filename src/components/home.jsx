import React from 'react';

export default function Home(props) {
  return (
    <div id='home' className='home' ref={props.homeRef}>
      <img src='assets/profile-photo.png' alt='Profile photo'></img>
      <h1 className='varela-round'>
        Hello, I&apos;m <span>Daniel Pham</span><br />
        I&apos;m a full-stack web developer.
      </h1>
    </div>
  );
}
