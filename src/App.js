import React from 'react';
import './components/global.css';
import './components/data';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="#hero">
        <Hero />
      </section>
      <section id="#projects">
        <Projects />
      </section>
      <section id="#contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;