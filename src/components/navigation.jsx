import React, { useState } from 'react';
import NavigationModal from './navigation-modal';

export default function Navigation(props) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function openNavigationModal() {
    setIsNavigationOpen(true);
    document.body.classList.add('no-scroll');
  }

  function closeNavigationModal() {
    setIsNavigationOpen(false);
    document.body.classList.remove('no-scroll');
  }

  function checkAbout() {
    const aboutIds = ['about', 'textOne', 'textTwo', 'textThree'];

    if (aboutIds.includes(props.isSectionActive)) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  function checkProjects() {
    const projectsIds = ['projects', 'event', 'brew'];

    if (projectsIds.includes(props.isSectionActive)) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  return (
    <div className='navigation-container space-between fixed'>
      <NavigationModal
        closeNavigationModal={closeNavigationModal}
        isNavigationOpen={isNavigationOpen}
        isSectionActive={props.isSectionActive}
        checkAbout={checkAbout}
        checkProjects={checkProjects}
      />
      <h1 className='nunito-900'>DP</h1>
      <i className="fa-solid fa-bars fa-lg" onClick={openNavigationModal}></i>
      <ul className='navigation-list nunito-900'>
        <li><a className={props.isSectionActive === 'home' ? 'active' : 'inactive'} href='#home'>HOME</a></li>
        <li><a className={checkAbout()} href='#about'>ABOUT</a></li>
        <li><a className={props.isSectionActive === 'skills' ? 'active' : 'inactive'} href='#skills'>SKILLS</a></li>
        <li><a className={props.isSectionActive === 'tools' ? 'active' : 'inactive'} href='#tools'>TOOLS</a></li>
        <li><a className={checkProjects()} href='#projects'>PROJECTS</a></li>
        <li><a className={props.isSectionActive === 'contact' ? 'active' : 'inactive'} href='#contact'>CONTACT</a></li>
      </ul>
    </div>
  );
}
