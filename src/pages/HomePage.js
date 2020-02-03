import React from 'react';
import IntroductionForWho from './Introduction/IntroductionForWho';
import Button from '../components/Button';
import logo from '../logo.svg';

function Home() {

  return (
    <div id='home-page'>
      <nav className='main-react-logo'><img className='logo' src={logo} /></nav>
      <main>
        
        <div />

        <div>
          <h1>Learn <strong>React From Scratch</strong></h1>
          <h3>Fundamentals of React, Redux, Node, ES6 and immutability.</h3>
        </div>

        <Button className='getStarted'>Get started</Button>

        <div style={{display: 'none'}}><IntroductionForWho /></div>  
      </main>
    </div>
  );
}

export default Home;
