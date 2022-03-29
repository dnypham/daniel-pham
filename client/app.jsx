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
    this.contactContainer = React.createRef();
    this.aboutHeader = React.createRef();
    this.skillsHeader = React.createRef();
    this.toolsHeader = React.createRef();
    this.projectsHeader = React.createRef();
    this.contactHeader = React.createRef();
    this.contact = React.createRef();

    this.sectionTitleRefs = {
      about: this.aboutHeader,
      skills: this.skillsHeader,
      tools: this.toolsHeader,
      projects: this.projectsHeader,
      contact: this.contactHeader
    };

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

    this.contactRefs = {
      contactContainer: this.contactContainer,
      contact: this.contact
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
      this.contactContainer
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
      this.slack,
      this.contact,
      this.event,
      this.brew
    ];

    this.headers = [
      this.aboutHeader,
      this.skillsHeader,
      this.toolsHeader,
      this.projectsHeader,
      this.contactHeader
    ];

    const sectionOptions = {
      root: null,
      threshold: 0.85,
      rootMargin: '0px 0px 0px 0px'
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

    const appearOptions = {
      root: null,
      threshold: 0.8,
      rootMargin: '0px 0px 0px 0px'
    };

    this.appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.target, entry.isIntersecting);

        if (entry.target.id === 'contact-animation' && entry.isIntersecting) {
          entry.target.classList.add('appear');
          entry.target.classList.add('bounce');
        } else if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);

    const headerOptions = {
      root: null,
      threshold: 1,
      rootMargin: '0px 0px -200px 0px'
    };

    this.appearOnScrollHeaders = new IntersectionObserver((entries, appearOnScrollHeaders) => {
      entries.forEach(entry => {
        console.log(entry.target.id, entry.target, entry.isIntersecting);

        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          entry.target.classList.add('enlarge');
        }
      });
    }, headerOptions);
  }

  componentDidMount() {
    this.sections.forEach(section => {
      this.sectionObserver.observe(section.current);
    });

    this.icons.forEach(section => {
      this.appearOnScroll.observe(section.current);
    });

    this.headers.forEach(header => {
      this.appearOnScrollHeaders.observe(header.current);
    });
  }

  render() {
    return (
      <>
        <Navigation isSectionActive={this.state.isSectionActive} />
        <Home homeRef={this.home} isSectionActive={this.state.isSectionActive} />
        <About sectionTitleRefs={this.sectionTitleRefs} aboutRefs={this.aboutRefs} isSectionActive={this.state.isSectionActive} />
        <Skills sectionTitleRefs={this.sectionTitleRefs} iconRefs={this.iconRefs} />
        <Tools sectionTitleRefs={this.sectionTitleRefs} iconRefs={this.iconRefs} />
        <Projects sectionTitleRefs={this.sectionTitleRefs} projectsRefs={this.projectsRefs} isSectionActive={this.state.isSectionActive} />
        <Contact sectionTitleRefs={this.sectionTitleRefs} contactRefs={this.contactRefs} isSectionActive={this.state.isSectionActive} />
      </>
    );
  }
}
