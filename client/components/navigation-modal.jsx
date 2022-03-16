import React from 'react';

export default class NavigationModal extends React.Component {
  render() {
    return (
      <div className={`navigation-modal ${this.props.isNavigationOpen ? 'view' : ''}`}>
        <div className='navigation-container flex-end'>
          <i className="fa-solid fa-xmark fa-xl" onClick={this.props.closeNavigationModal}></i>
        </div>
        <ul className='navigation-list-modal nunito-900'>
          <li><a href='#home' onClick={this.props.closeNavigationModal}>HOME</a></li>
          <li><a href='#about' onClick={this.props.closeNavigationModal}>ABOUT</a></li>
          <li><a href='#skills' onClick={this.props.closeNavigationModal}>SKILLS + TOOLS</a></li>
          <li><a href='#projects' onClick={this.props.closeNavigationModal}>PROJECTS</a></li>
          <li><a href='#contact' onClick={this.props.closeNavigationModal}>CONTACT</a></li>
        </ul>
      </div>
    );
  }
}
