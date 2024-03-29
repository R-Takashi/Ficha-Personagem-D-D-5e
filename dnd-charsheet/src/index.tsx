import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppProvider from './Context/AppProvider';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  width: auto;
  height: auto;
}

:root {
  --primary-color: #1f2024;
  --secondary-color: #c53131;
  --white: #fdfef9;
  --font-size-small: 1rem;
  --font-size-medium: 1.2rem;
  --font-size-large: 1.5rem;
}


body {
  background-color: #1f2024;
  color: #fff;
  width: 100%;
  height: 100%;
}

`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
