import React from 'react';
import './App.css';
import Header from './components/Header';
import TabNav from './components/TabNav';
import Outlet from './components/Outlet';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
  background-color: #f5f5f5;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <TabNav />
      <Outlet />
    </AppContainer>
  );
}

export default App;
