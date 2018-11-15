import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch, withRouter} from 'react-router-dom';
import HeaderBar from './header';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import AddDocument from './addDocument';
import AddVitals from './addVitals';
import FileManagement from './fileManagement';
import Contact from "./contact";
import RegistrationPage from '../auth/components/registration-page';
import {refreshAuthToken} from '../auth/actions/auth';

export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
                <HeaderBar />
                <Switch>
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/Dashboard" component={Dashboard} />
                  <Route path="/Dashboard/AddDocument" component={AddDocument}/>
                  <Route path="/Dashboard/AddVitals" component={AddVitals}/>
                  <Route path="/Dashboard/FileManagement" component={FileManagement}/>
                  <Route path="/Dashboard/Contact" component={Contact}/>
                  <Route path="/register" component={RegistrationPage} />
                  {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
