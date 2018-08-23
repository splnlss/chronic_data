import React from 'react';
import './dashboard.css'
import './header.css'
import logo from '../images/logo.svg';

export default function Header(props){

return (
  <div>
      <header className="header">
        <img src={logo} className="logo" alt="Chronic Data Logo" height="120"/>
        <div className="title">
          <h1 className="header-title">CHRONIC DATA SOCIETY</h1>
          <p className="header-intro">
              your data. your control.
          </p>
        </div>
			<nav>
				<ul className="header-links">
					<li><a className="new" onClick={props.addDocument}>+ Add Medical Document</a></li>
				</ul>
			</nav>
		</header>
  </div>
    )
}
