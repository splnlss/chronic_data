import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './dashboard.css'
import './header.css'
import Main from "./main";
import Contact from "./contact";
import AddDocument from './addDocument';
import AddVitals from './addVitals';
import logo from '../images/logo.svg';

export default function Header(props){

return (
  <Router>
    <div>
        <header className="header">
          <img src={logo} className="logo" alt="Chronic Data Logo" height="120"/>
          <div className="title">
            <h1 className="header-title"><Link to="/">CHRONIC DATA SOCIETY</Link></h1>
            <p className="header-intro">
                your data. your control.
            </p>
          </div>
  			<nav>
  				<ul className="header-links">
  					<li><Link to="/AddDocument">+ Add Document</Link></li>
            <li><Link to="/AddVitals">+ Add Vitals</Link></li>
            <li><Link to="/FileManagement">+ File Management</Link></li>
            <li><Link to="/Contact">+ Contact</Link></li>
  				</ul>
  			</nav>
  		</header>
    </div>
  </Router>
    )
}
