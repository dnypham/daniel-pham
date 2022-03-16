import React from 'react';

export default class NavigationModal extends React.Component {
  render() {
    return (
      <div className={`navigation-modal ${this.props.isNavigationOpen ? 'view' : ''}`}>
        <div className='navigation-container flex-end'>
          <i className="fa-solid fa-xmark fa-xl" onClick={this.props.closeNavigationModal}></i>
        </div>
        <ul className='navigation-list-modal nunito-900'>
          <li><a className={this.props.isActive === 'home' ? 'active' : 'inactive'} href='#home'>HOME</a></li>
          <li><a className={this.props.isActive === 'about' ? 'active' : 'inactive'} href='#about'>ABOUT</a></li>
          <li><a className={this.props.isActive === 'skills' ? 'active' : 'inactive'} href='#skills'>SKILLS</a></li>
          <li><a className={this.props.isActive === 'tools' ? 'active' : 'inactive'} href='#tools'>TOOLS</a></li>
          <li><a className={this.props.isActive === 'projects' ? 'active' : 'inactive'} href='#projects'>PROJECTS</a></li>
          <li><a className={this.props.isActive === 'contact' ? 'active' : 'inactive'} href='#contact'>CONTACT</a></li>
        </ul>
      </div>
    );
  }
}
