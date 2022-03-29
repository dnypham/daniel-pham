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
      isSectionActive: null
    };

    this.home = React.createRef();
    this.about = React.createRef();
    this.aboutContent = React.createRef();
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
    this.contactForm = React.createRef();
    this.aboutHeader = React.createRef();
    this.skillsHeader = React.createRef();
    this.toolsHeader = React.createRef();
    this.projectsHeader = React.createRef();
    this.contactHeader = React.createRef();
    this.contact = React.createRef();

    this.aboutSectionRefs = {
      about: this.about,
      header: this.aboutHeader,
      content: this.aboutContent
    };

    this.skillsSectionRefs = {
      skills: this.skills,
      header: this.skillsHeader,
      javascript: this.javascript,
      react: this.react,
      node: this.node,
      express: this.express,
      postgres: this.postgres,
      html: this.html,
      css: this.css
    };

    this.toolsSectionRefs = {
      tools: this.tools,
      header: this.toolsHeader,
      git: this.git,
      npm: this.npm,
      webpack: this.webpack,
      babel: this.babel,
      vscode: this.vscode,
      figma: this.figma,
      github: this.github,
      slack: this.slack
    };

    this.projectsSectionRefs = {
      projects: this.projects,
      header: this.projectsHeader,
      event: this.event,
      brew: this.brew
    };

    this.contactSectionRefs = {
      contact: this.contact,
      contactForm: this.contactForm,
      header: this.contactHeader
    };

    this.sections = [
      this.home,
      this.about,
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
      this.slack,
      this.contactForm
    ];

    this.sectionHeaders = [
      this.aboutHeader,
      this.skillsHeader,
      this.toolsHeader,
      this.projectsHeader,
      this.contactHeader
    ];

    this.sliders = [
      this.aboutContent,
      this.event,
      this.brew
    ];

    const sectionOptions = {
      root: null,
      threshold: 0.50,
      rootMargin: '0px 0px -100px 0px'
    };

    this.sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.setState({
            isSectionActive: entry.target.id
          });
        }
      });
    }, sectionOptions);

    const appearIconsOptions = {
      root: null,
      threshold: 0.8,
      rootMargin: '0px 0px 0px 0px'
    };

    this.appearIcons = new IntersectionObserver((entries, appearIcons) => {
      entries.forEach(entry => {
        if (entry.target.id === 'contact-form' && entry.isIntersecting) {
          entry.target.classList.add('appear');
          entry.target.classList.add('bounce');
          appearIcons.unobserve(entry.target);
        } else if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearIcons.unobserve(entry.target);
        }
      });
    }, appearIconsOptions);

    const headerOptions = {
      root: null,
      threshold: 1,
      rootMargin: '0px 0px -200px 0px'
    };

    this.appearHeaders = new IntersectionObserver((entries, appearHeaders) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          entry.target.classList.add('enlarge');
          appearHeaders.unobserve(entry.target);
        }
      });
    }, headerOptions);

    const slidersOptions = {
      root: null,
      threshold: 0.4,
      rootMargin: '0px 0px 0px 0px'
    };

    this.appearSliders = new IntersectionObserver((entries, appearSliders) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearSliders.unobserve(entry.target);
        }
      });
    }, slidersOptions);

  }

  componentDidMount() {
    this.sections.forEach(section => {
      this.sectionObserver.observe(section.current);
    });

    this.sectionHeaders.forEach(header => {
      this.appearHeaders.observe(header.current);
    });

    this.sliders.forEach(slider => {
      this.appearSliders.observe(slider.current);
    });

    this.icons.forEach(icon => {
      this.appearIcons.observe(icon.current);
    });
  }

  render() {
    return (
      <>
        <Navigation isSectionActive={this.state.isSectionActive} />
        <Home homeRef={this.home} />
        <About aboutSectionRefs={this.aboutSectionRefs} />
        <Skills skillsSectionRefs={this.skillsSectionRefs} />
        <Tools toolsSectionRefs={this.toolsSectionRefs} />
        <Projects projectsSectionRefs={this.projectsSectionRefs} />
        <Contact contactSectionRefs={this.contactSectionRefs} />
      </>
    );
  }
}
