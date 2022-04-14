import React from 'react';

export default function NavigationModal(props) {
  return (
    <div className={`navigation-modal ${props.isNavigationOpen ? 'view' : ''}`}>
      <div className='navigation-container flex-end'>
        <i className="fa-solid fa-xmark fa-xl" onClick={props.closeNavigationModal}></i>
      </div>
      <ul className='navigation-list-modal nunito-900'>
        <li><a className={props.isSectionActive === 'home' ? 'active' : 'inactive'} href='#home' onClick={props.closeNavigationModal}>HOME</a></li>
        <li><a className={props.checkAbout()} href='#about' onClick={props.closeNavigationModal}>ABOUT</a></li>
        <li><a className={props.isSectionActive === 'skills' ? 'active' : 'inactive'} href='#skills' onClick={props.closeNavigationModal}>SKILLS</a></li>
        <li><a className={props.isSectionActive === 'tools' ? 'active' : 'inactive'} href='#tools' onClick={props.closeNavigationModal}>TOOLS</a></li>
        <li><a className={props.checkProjects()} href='#projects' onClick={props.closeNavigationModal}>PROJECTS</a></li>
        <li><a className={props.isSectionActive === 'contact' ? 'active' : 'inactive'} href='#contact' onClick={props.closeNavigationModal}>CONTACT</a></li>
      </ul>
    </div>
  );
}
