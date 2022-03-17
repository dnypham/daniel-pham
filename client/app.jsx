import React from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Tools from './components/tools';
import Projects from './components/projects';
import Contact from './components/contact';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: null
    };

    this.home = React.createRef();
    this.about = React.createRef();
    this.skills = React.createRef();
    this.tools = React.createRef();
    this.projects = React.createRef();
    this.contact = React.createRef();

    this.sections = [
      this.home,
      this.about,
      this.skills,
      this.tools,
      this.projects,
      this.contact
    ];

    const options = {
      root: null,
      threshold: 0.80,
      rootMargin: '0px'
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting);

        if (entry.isIntersecting) {
          this.setState({
            isActive: entry.target.id
          });
        }
      });
    }, options);
  }

  componentDidMount() {
    this.sections.forEach(section => {
      this.observer.observe(section.current);
    });
  }

  render() {
    return (
      <>
        <Navigation isActive={this.state.isActive} />
        <Home sectionRef={this.home} isActive={this.state.isActive} />
        <About sectionRef={this.about} isActive={this.state.isActive} />
        <Skills sectionRef={this.skills} isActive={this.state.isActive} />
        <Tools sectionRef={this.tools} isActive={this.state.isActive} />
        <Projects sectionRef={this.projects} isActive={this.state.isActive} />
        <Contact sectionRef={this.contact} isActive={this.state.isActive} />
      </>
    );
  }
}
