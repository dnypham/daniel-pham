import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Home />
      </>
    );
  }
}
