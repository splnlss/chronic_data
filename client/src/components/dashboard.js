import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './dashboard.css';
import Header from './header';
import Main from "./main";
import AddDocument from './addDocument';
import AddVitals from './addVitals';
import FileManagement from './fileManagement';
import Contact from "./contact";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div className="dashboard">
          <Header />
            <main>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route path="/AddDocument" component={AddDocument}/>
                  <Route path="/AddVitals" component={AddVitals}/>
                  <Route path="/FileManagement" component={FileManagement}/>
                  <Route path="/Contact" component={Contact}/>
                </Switch>
            </main>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
