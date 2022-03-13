import React from 'react';
import NavigationModal from './navigation-modal';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpen: false
    };

    this.closeNavigationModal = this.closeNavigationModal.bind(this);
  }

  closeNavigationModal() {
    this.setState({ isNavigationOpen: false });
  }

  renderNavigationModal() {
    if (this.state.isNavigationOpen) {
      return (
        <NavigationModal closeNavigationModal={this.closeNavigationModal}/>
      );
    }
  }

  render() {
    return (
      <div className='navigation-container space-between'>
        {this.renderNavigationModal()}
        <h1 className='nunito-900'>DP</h1>
        <i className="fa-solid fa-bars fa-lg" onClick={() => this.setState({ isNavigationOpen: true })}></i>
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
