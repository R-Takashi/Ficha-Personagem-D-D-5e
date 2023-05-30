import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TabNav from './components/Tabs/TabNav';
import Outlet from './components/Outlet/Outlet';


function App() {
  return (
    <>
      <Header />
      <TabNav />
      <Outlet />
    </>
  );
}

export default App;
