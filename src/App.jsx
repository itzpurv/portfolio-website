import React from 'react';
import Hero from './components/Hero';
import TableOfContents from './components/TableOfContents';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import DesigningSamples from './components/DesigningSamples';
import PhotographySamples from './components/PhotographySamples';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <TableOfContents />
      <About />
      <Education />
      <Skills />
      <DesigningSamples />
      <PhotographySamples />
      <ContactMe />
    </div>
  );
}

export default App;
