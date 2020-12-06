import React from 'react'
import Homepage from '../src/components/homepage'
import logo from './logo.svg';
import './App.css';
import Sidebarleft from './components/sidebar_left';
import Sidebarright from './components/sidebar_right';
import '../src/cascade/index.css'

function App() {
  return (
    <div className="App">
     <div className="sidebar-left"><Sidebarleft/></div>
     <div className="homepage"><Homepage/></div>
     <div className="sidebar-right"><Sidebarright/></div>
    </div>
  );
}

export default App;
