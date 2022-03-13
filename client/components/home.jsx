import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <img src='images/profile-photo.png' alt='Photo'></img>
        <h1 className='varela-round'>
          Hello, I&apos;m <span>Daniel Pham</span> <br />
          I&apos;m a full-stack web developer.
        </h1>
      </div>
    );
  }
}
