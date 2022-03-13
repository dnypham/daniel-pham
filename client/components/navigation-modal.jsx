import React from 'react';

export default class NavigationModal extends React.Component {
  render() {
    return (
      <div className={`navigation-modal ${this.props.isNavigationOpen ? 'view' : ''}`}>
        <div className='navigation-container flex-end'>
          <i className="fa-solid fa-xmark fa-xl" onClick={this.props.closeNavigationModal}></i>
        </div>
        <ul className='navigation-list-modal nunito-900'>
          <li><a>HOME</a></li>
          <li><a>ABOUT</a></li>
          <li><a>SKILLS + TOOLS</a></li>
          <li><a>PROJECTS</a></li>
          <li><a>CONTACT</a></li>
        </ul>
      </div>
    );
  }
}
