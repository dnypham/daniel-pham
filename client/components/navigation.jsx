import React from 'react';
import NavigationModal from './navigation-modal';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationOpen: false
    };

    this.openNavigationModal = this.openNavigationModal.bind(this);
    this.closeNavigationModal = this.closeNavigationModal.bind(this);
    this.checkAbout = this.checkAbout.bind(this);
  }

  openNavigationModal() {
    this.setState({ isNavigationOpen: true });
    document.body.classList.add('no-scroll');
  }

  closeNavigationModal() {
    this.setState({ isNavigationOpen: false });
    document.body.classList.remove('no-scroll');
  }

  checkAbout() {
    const aboutArray = ['about', 'textOne', 'textTwo', 'textThree'];

    if (aboutArray.includes(this.props.isActive)) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  render() {
    return (
      <div className='navigation-container space-between fixed'>
        <NavigationModal
          closeNavigationModal={this.closeNavigationModal}
          isNavigationOpen={this.state.isNavigationOpen}
          isActive={this.props.isActive}
          checkAbout={this.checkAbout}
        />
        <h1 className='nunito-900'>DP</h1>
        <i className="fa-solid fa-bars fa-lg" onClick={this.openNavigationModal}></i>
        <ul className='navigation-list nunito-900'>
          <li><a className={this.props.isActive === 'home' ? 'active' : 'inactive'} href='#home'>HOME</a></li>
          <li><a className={this.checkAbout()} href='#about'>ABOUT</a></li>
          <li><a className={this.props.isActive === 'skills' ? 'active' : 'inactive'} href='#skills'>SKILLS</a></li>
          <li><a className={this.props.isActive === 'tools' ? 'active' : 'inactive'} href='#tools'>TOOLS</a></li>
          <li><a className={this.props.isActive === 'projects' || this.props.isActive === 'event' || this.props.isActive === 'brew' ? 'active' : 'inactive'} href='#projects'>PROJECTS</a></li>
          <li><a className={this.props.isActive === 'contact' ? 'active' : 'inactive'} href='#contact'>CONTACT</a></li>
        </ul>
      </div>
    );
  }
}
