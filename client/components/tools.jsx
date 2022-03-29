import React from 'react';

export default class Tools extends React.Component {
  render() {
    return (
      <div id='tools' className='skills-container' ref={this.props.toolsSectionRefs.tools}>
        <h2 className='nunito-900 fade-in' ref={this.props.toolsSectionRefs.header}>TOOLS</h2>
        <div className='row wrap justify-center skill-container-rows'>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.git}>
            <img src='images/git.svg'></img>
            <h3 className='nunito-900'>Git</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.npm}>
            <img src='images/npm.svg'></img>
            <h3 className='nunito-900'>npm</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.webpack}>
            <img src='images/webpack.svg'></img>
            <h3 className='nunito-900'>Webpack</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.babel}>
            <img src='images/babel.svg'></img>
            <h3 className='nunito-900'>Babel</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.vscode}>
            <img src='images/vscode.svg'></img>
            <h3 className='nunito-900'>VS Code</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.figma}>
            <img src='images/figma.svg'></img>
            <h3 className='nunito-900'>Figma</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.github}>
            <img className='white' src='images/github.svg'></img>
            <h3 className='nunito-900'>GitHub</h3>
          </div>
          <div className='skill-container fade-in from-bottom' ref={this.props.toolsSectionRefs.slack}>
            <img src='images/slack.svg'></img>
            <h3 className='nunito-900'>Slack</h3>
          </div>
        </div>
      </div>
    );
  }
}
