import React, { Component } from 'react';
import './dashboard.css';
import Header from './header'
import AddDocument from './addDocument'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
          <main>
            <AddDocument />
          </main>
      </div>
    );
  }
}

export default Dashboard;
