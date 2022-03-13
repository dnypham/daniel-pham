import React from 'react';

export default class Navigation extends React.Component {

  render() {
    return (
      <div className='navigation-container test'>
        <h1 className='nunito-900'>DP</h1>
        <i className="fa-solid fa-bars"></i>
        <ul className='navigation-list nunito-900'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILLS + TOOLS</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
      </div>
    );
  }
}
