import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 700;
  color: red;

`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>weeee</H1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
