import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div id='home' className='home' ref={this.props.homeRef}>
        <img src='images/profile-photo.png' alt='Photo'></img>
        <h1 className='varela-round'>
          Hello, I&apos;m <span>Daniel Pham</span>. <br />
          I&apos;m a full-stack web developer.
        </h1>
      </div>
    );
  }
}
