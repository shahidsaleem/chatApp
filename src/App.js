import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ChatBox from './components/ChatBox';

class App extends Component {

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/chat" component={ChatBox} />
      </Switch>
    );
  }
}

export default App;
