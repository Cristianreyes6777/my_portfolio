import React from 'react';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education'; 
import HomePagdData from '../data/HomePagdData.json';
import Contact from '../components/Contact';

export default function Home() {
  const {
    hero,
    socialBtns,
    about,
    projects,
    education, 
    contact,
  } = HomePagdData;

  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <About data={about} />
      <Projects data={projects} />
      <Education data={education} /> 
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}
