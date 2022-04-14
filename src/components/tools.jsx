import React from 'react';

export default function Tools(props) {
  return (
    <div id='tools' className='skills-container' ref={props.toolsSectionRefs.tools}>
      <h2 className='nunito-900 fade-in' ref={props.toolsSectionRefs.header}>TOOLS</h2>
      <div className='row wrap justify-center skill-container-rows'>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.git}>
          <img src='assets/tools/git.svg' alt='Git'></img>
          <h3 className='nunito-900'>Git</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.npm}>
          <img src='assets/tools/npm.svg' alt='npm'></img>
          <h3 className='nunito-900'>npm</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.webpack}>
          <img src='assets/tools/webpack.svg' alt='Webpack'></img>
          <h3 className='nunito-900'>Webpack</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.babel}>
          <img src='assets/tools/babel.svg' alt='Babel'></img>
          <h3 className='nunito-900'>Babel</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.vscode}>
          <img src='assets/tools/vscode.svg' alt='Visual Studio Code'></img>
          <h3 className='nunito-900'>VS Code</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.figma}>
          <img src='assets/tools/figma.svg' alt='Figma'></img>
          <h3 className='nunito-900'>Figma</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.github}>
          <img className='white' src='assets/tools/github.svg' alt='GitHub'></img>
          <h3 className='nunito-900'>GitHub</h3>
        </div>
        <div className='skill-container fade-in from-bottom' ref={props.toolsSectionRefs.slack}>
          <img src='assets/tools/slack.svg' alt='Slack'></img>
          <h3 className='nunito-900'>Slack</h3>
        </div>
      </div>
    </div>
  );
}
