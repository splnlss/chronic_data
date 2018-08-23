import React, { Component } from 'react';
import logo from './logo.svg';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <header className="header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-title">Chronic Data Society</h1>
        </header>
        <p className="header-intro">
          This is just the beginning. <code>src/dashboard.js</code>
        </p>
      </div>
    );
  }
}

export default Dashboard;
