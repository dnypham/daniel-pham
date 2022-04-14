import React, { useState, useEffect } from 'react';
import Navigation from './components/navigation';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Tools from './components/tools';
import Projects from './components/projects';
import Contact from './components/contact';

export default function App() {
  const [isSectionActive, setSectionActive] = useState(null);

  const home = React.createRef();
  const about = React.createRef();
  const aboutContent = React.createRef();
  const skills = React.createRef();
  const javascript = React.createRef();
  const node = React.createRef();
  const react = React.createRef();
  const express = React.createRef();
  const postgres = React.createRef();
  const html = React.createRef();
  const css = React.createRef();
  const tools = React.createRef();
  const github = React.createRef();
  const vscode = React.createRef();
  const babel = React.createRef();
  const npm = React.createRef();
  const webpack = React.createRef();
  const git = React.createRef();
  const figma = React.createRef();
  const slack = React.createRef();
  const projects = React.createRef();
  const event = React.createRef();
  const brew = React.createRef();
  const contactForm = React.createRef();
  const aboutHeader = React.createRef();
  const skillsHeader = React.createRef();
  const toolsHeader = React.createRef();
  const projectsHeader = React.createRef();
  const contactHeader = React.createRef();
  const contact = React.createRef();

  const aboutSectionRefs = {
    about: about,
    header: aboutHeader,
    content: aboutContent
  };

  const skillsSectionRefs = {
    skills: skills,
    header: skillsHeader,
    javascript: javascript,
    react: react,
    node: node,
    express: express,
    postgres: postgres,
    html: html,
    css: css
  };

  const toolsSectionRefs = {
    tools: tools,
    header: toolsHeader,
    git: git,
    npm: npm,
    webpack: webpack,
    babel: babel,
    vscode: vscode,
    figma: figma,
    github: github,
    slack: slack
  };

  const projectsSectionRefs = {
    projects: projects,
    header: projectsHeader,
    event: event,
    brew: brew
  };

  const contactSectionRefs = {
    contact: contact,
    contactForm: contactForm,
    header: contactHeader
  };

  const sections = [
    home,
    about,
    skills,
    tools,
    projects,
    event,
    brew,
    contact
  ];

  const icons = [
    javascript,
    react,
    node,
    express,
    postgres,
    html,
    css,
    github,
    vscode,
    babel,
    npm,
    webpack,
    git,
    figma,
    slack,
    contactForm
  ];

  const sectionHeaders = [
    aboutHeader,
    skillsHeader,
    toolsHeader,
    projectsHeader,
    contactHeader
  ];

  const sliders = [
    aboutContent,
    event,
    brew
  ];

  const sectionOptions = {
    root: null,
    threshold: 0.50,
    rootMargin: '0px 0px -100px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setSectionActive(entry.target.id);
      }
    });
  }, sectionOptions);

  const appearIconsOptions = {
    root: null,
    threshold: 0.8,
    rootMargin: '0px 0px 0px 0px'
  };

  const appearIcons = new IntersectionObserver((entries, appearIcons) => {
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

  const appearHeaders = new IntersectionObserver((entries, appearHeaders) => {
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

  const appearSliders = new IntersectionObserver((entries, appearSliders) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        appearSliders.unobserve(entry.target);
      }
    });
  }, slidersOptions);

  useEffect(() => {
    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    sectionHeaders.forEach(header => {
      appearHeaders.observe(header.current);
    });

    sliders.forEach(slider => {
      appearSliders.observe(slider.current);
    });

    icons.forEach(icon => {
      appearIcons.observe(icon.current);
    });
  }, []);

  return (
    <>
      <Navigation isSectionActive={isSectionActive} />
      <Home homeRef={home} />
      <About aboutSectionRefs={aboutSectionRefs} />
      <Skills skillsSectionRefs={skillsSectionRefs} />
      <Tools toolsSectionRefs={toolsSectionRefs} />
      <Projects projectsSectionRefs={projectsSectionRefs} />
      <Contact contactSectionRefs={contactSectionRefs} />
    </>
  );

}
