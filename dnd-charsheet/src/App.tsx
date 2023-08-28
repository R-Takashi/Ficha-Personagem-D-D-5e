import React from 'react';
import './App.css';
import Header from './App/Header/Header';
import TabNav from './App/Tabs/TabNav';
import Outlet from './App/Outlet/Outlet';



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
