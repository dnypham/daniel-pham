import React from 'react';

export default class Tools extends React.Component {
  render() {
    return (
      <div id='tools' className='skills-container' ref={this.props.sectionRef}>
        <h2 className='nunito-900'>TOOLS</h2>
        <div className='row wrap'>
          <div className='skill-container'>
            <img className='white' src='images/github.svg'></img>
            <h3 className='nunito-900'>GitHub</h3>
          </div>
          <div className='skill-container'>
            <img src='images/vscode.svg'></img>
            <h3 className='nunito-900'>VS Code</h3>
          </div>
          <div className='skill-container'>
            <img src='images/babel.svg'></img>
            <h3 className='nunito-900'>Babel</h3>
          </div>
          <div className='skill-container'>
            <img src='images/npm.svg'></img>
            <h3 className='nunito-900'>npm</h3>
          </div>
          <div className='skill-container'>
            <img src='images/webpack.svg'></img>
            <h3 className='nunito-900'>Webpack</h3>
          </div>
          <div className='skill-container'>
            <img src='images/figma.svg'></img>
            <h3 className='nunito-900'>Figma</h3>
          </div>
          <div className='skill-container'>
            <img src='images/slack.svg'></img>
            <h3 className='nunito-900'>Slack</h3>
          </div>
          <div className='skill-container'>
            <img src='images/canva.svg'></img>
            <h3 className='nunito-900'>Canva</h3>
          </div>
        </div>
      </div>
    );
  }
}
