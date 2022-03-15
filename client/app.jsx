import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Tools from './components/tools';
import Projects from './components/projects';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
        <About />
        <Skills />
        <Tools />
        <Projects />
      </>
    );
  }
}
