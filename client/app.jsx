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
    this.textOne = React.createRef();
    this.textTwo = React.createRef();
    this.textThree = React.createRef();
    this.skills = React.createRef();
    this.tools = React.createRef();
    this.projects = React.createRef();
    this.event = React.createRef();
    this.brew = React.createRef();
    this.contact = React.createRef();

    this.projectsObj = {
      projects: this.projects,
      event: this.event,
      brew: this.brew
    };

    this.aboutObj = {
      about: this.about,
      textOne: this.textOne,
      textTwo: this.textTwo,
      textThree: this.textThree
    };

    this.sections = [
      this.home,
      this.about,
      this.textOne,
      this.textTwo,
      this.textThree,
      this.skills,
      this.tools,
      this.projects,
      this.event,
      this.brew,
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
        <About sectionRef={this.aboutObj} isActive={this.state.isActive} />
        <Skills sectionRef={this.skills} isActive={this.state.isActive} />
        <Tools sectionRef={this.tools} isActive={this.state.isActive} />
        <Projects sectionRef={this.projectsObj} isActive={this.state.isActive} />
        <Contact sectionRef={this.contact} isActive={this.state.isActive} />
      </>
    );
  }
}
