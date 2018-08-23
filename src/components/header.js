//html for game entry
import React from 'react';
import './displayDashboard.css'


export default function Header(props){


  return (

  <div>
      <header>
			<nav>
				<ul className="clearfix">
					<li><a className="new" onClick={props.newDocument}>+ New Document</a></li>
				</ul>
			</nav>
			<h1>Chronic Data Society</h1>
		</header>
  </div>
    )
}
