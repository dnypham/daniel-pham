import React from 'react';

export default class Tools extends React.Component {
  render() {
    return (
      <div id='tools' className='skills-container' ref={this.props.iconRefs.tools}>
        <h2 className='nunito-900'>TOOLS</h2>
        <div className='row wrap justify-center'>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.vscode}>
            <img src='images/vscode.svg'></img>
            <h3 className='nunito-900'>VS Code</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.git}>
            <img src='images/git.svg'></img>
            <h3 className='nunito-900'>Git</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.npm}>
            <img src='images/npm.svg'></img>
            <h3 className='nunito-900'>npm</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.babel}>
            <img src='images/babel.svg'></img>
            <h3 className='nunito-900'>Babel</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.webpack}>
            <img src='images/webpack.svg'></img>
            <h3 className='nunito-900'>Webpack</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.figma}>
            <img src='images/figma.svg'></img>
            <h3 className='nunito-900'>Figma</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.github}>
            <img className='white' src='images/github.svg'></img>
            <h3 className='nunito-900'>GitHub</h3>
          </div>
          <div className='skill-container opacity-0' ref={this.props.iconRefs.slack}>
            <img src='images/slack.svg'></img>
            <h3 className='nunito-900'>Slack</h3>
          </div>
        </div>
      </div>
    );
  }
}
