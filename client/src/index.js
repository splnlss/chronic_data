import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';
import config from './app.config';
import Dashboard from './components/dashboard';
import registerServiceWorker from './registerServiceWorker';


function onAuthRequired({ history }) {
  history.push('/login');
}

ReactDOM.render(
  <Router>
    <Security issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}
      onAuthRequired={onAuthRequired}>
     <Dashboard />
    </Security>
 </Router>,
  document.getElementById('root')
);
registerServiceWorker()
