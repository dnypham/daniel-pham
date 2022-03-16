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

  render() {
    return (
      <div className='navigation-container space-between'>
        <NavigationModal closeNavigationModal={this.closeNavigationModal} isNavigationOpen={this.state.isNavigationOpen}/>
        <h1 className='nunito-900'>DP</h1>
        <i className="fa-solid fa-bars fa-lg" onClick={() => this.setState({ isNavigationOpen: true })}></i>
        <ul className='navigation-list nunito-900'>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href='#skills'>SKILLS + TOOLS</a></li>
          <li><a href='#projects'>PROJECTS</a></li>
          <li><a href='#contact'>CONTACT</a></li>
        </ul>
      </div>
    );
  }
}
