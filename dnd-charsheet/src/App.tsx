import React from 'react';
import './App.css';
import Header from './components/Header';
import TabNav from './components/TabNav';
import Outlet from './components/Outlet';


function App() {
  return (
    <div className="App">
      <Header />
      <TabNav />
      <Outlet />
    </div>
  );
}

export default App;
