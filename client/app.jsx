import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
        <About />
      </>
    );
  }
}
