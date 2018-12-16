import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';

import Home from './routes/home';
import DiagramRoute from './routes/diagram-route';
import Register from './routes/register';
import Login from './routes/login';
import NewApplication from './routes/new-application';
import EditApplications from './routes/edit-applications';
import NotFound from './routes/not-found';

import './App.css';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <main className="main">
        <Helmet defaultTitle="Umsóknarferli" titleTemplate="%s - Umsóknarferli" />

        <Header />

         <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <UserRoute path="/diagram" exact authenticated={isAuthenticated} component={DiagramRoute} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <UserRoute path="/new" exact authenticated={isAuthenticated} component={NewApplication} />
            <UserRoute path="/applications" exact authenticated={isAuthenticated} component={EditApplications} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

export default withRouter(connect(mapStateToProps)(App));
