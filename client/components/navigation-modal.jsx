import React from 'react';

export default class NavigationModal extends React.Component {
  render() {
    return (
      <div className='navigation-modal'>
        <div className='navigation-container flex-end'>
          <i className="fa-solid fa-xmark fa-xl" onClick={this.props.closeNavigationModal}></i>
        </div>
        <ul className='navigation-list-modal nunito-900'>
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
