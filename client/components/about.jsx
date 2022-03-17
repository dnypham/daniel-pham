import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <div id='about' className='about-container' ref={this.props.sectionRef}>
        <h2 className='nunito-900'>ABOUT</h2>
        <div className='about-text-container varela-round'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div className='about-button-container'>
            <a href='https://drive.google.com/file/d/1QWSQ65Qzn4Rjqv1AOek894Ow4oI2ekm9/view?usp=sharing' target='_blank' rel='noreferrer' className='icon-container'>RESUME</a>
          </div>
        </div>
      </div>
    );
  }
}
