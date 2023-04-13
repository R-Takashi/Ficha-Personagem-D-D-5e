import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header';
import TabNav from './components/TabNav';
import Outlet from './components/Outlet';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
`;


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <TabNav />
      <Outlet />
    </div>
  );
}

export default App;
