import React from 'react';
import './App.css';

//IMPORTING ALL CONTAINERS

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

//IMPORTING COMPONENTS

import { Brand, CTA, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
