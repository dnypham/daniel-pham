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
      isSectionActive: null,
      isIconActive: null
    };

    this.home = React.createRef();
    this.about = React.createRef();
    this.textOne = React.createRef();
    this.textTwo = React.createRef();
    this.textThree = React.createRef();
    this.skills = React.createRef();
    this.javascript = React.createRef();
    this.node = React.createRef();
    this.react = React.createRef();
    this.express = React.createRef();
    this.postgres = React.createRef();
    this.html = React.createRef();
    this.css = React.createRef();
    this.tools = React.createRef();
    this.github = React.createRef();
    this.vscode = React.createRef();
    this.babel = React.createRef();
    this.npm = React.createRef();
    this.webpack = React.createRef();
    this.git = React.createRef();
    this.figma = React.createRef();
    this.slack = React.createRef();
    this.projects = React.createRef();
    this.event = React.createRef();
    this.brew = React.createRef();
    this.contact = React.createRef();

    this.aboutRefs = {
      about: this.about,
      textOne: this.textOne,
      textTwo: this.textTwo,
      textThree: this.textThree
    };

    this.projectsRefs = {
      projects: this.projects,
      event: this.event,
      brew: this.brew
    };

    this.iconRefs = {
      skills: this.skills,
      javascript: this.javascript,
      react: this.react,
      node: this.node,
      express: this.express,
      postgres: this.postgres,
      html: this.html,
      css: this.css,
      tools: this.tools,
      github: this.github,
      vscode: this.vscode,
      babel: this.babel,
      npm: this.npm,
      webpack: this.webpack,
      git: this.git,
      figma: this.figma,
      slack: this.slack
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

    this.icons = [
      this.javascript,
      this.react,
      this.node,
      this.express,
      this.postgres,
      this.html,
      this.css,
      this.github,
      this.vscode,
      this.babel,
      this.npm,
      this.webpack,
      this.git,
      this.figma,
      this.slack
    ];

    const sectionOptions = {
      root: null,
      threshold: 0.60,
      rootMargin: '0px 0px -200px 0px'
    };

    this.sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
      entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting);

        if (entry.isIntersecting) {
          this.setState({
            isSectionActive: entry.target.id
          });
        }
      });
    }, sectionOptions);

    const iconOptions = {
      root: null,
      threshold: 1,
      rootMargin: '0px 0px -40px 0px'
    };

    this.iconObserver = new IntersectionObserver((entries, iconObserver) => {
      entries.forEach(entry => {
        console.log(entry.target, entry.isIntersecting);

        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('fade-in');
        }
      });
    }, iconOptions);
  }

  componentDidMount() {
    this.sections.forEach(section => {
      this.sectionObserver.observe(section.current);
    });

    this.icons.forEach(section => {
      this.iconObserver.observe(section.current);
    });
  }

  render() {
    return (
      <>
        <Navigation isSectionActive={this.state.isSectionActive} />
        <Home homeRef={this.home} isSectionActive={this.state.isSectionActive} />
        <About aboutRefs={this.aboutRefs} isSectionActive={this.state.isSectionActive} />
        <Skills iconRefs={this.iconRefs} />
        <Tools iconRefs={this.iconRefs} />
        <Projects projectsRefs={this.projectsRefs} isSectionActive={this.state.isSectionActive} />
        <Contact contactRef={this.contact} isSectionActive={this.state.isSectionActive} />
      </>
    );
  }
}
