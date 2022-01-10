import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


const App = () => (
  <Switch>
    <Route exact path="/" component={() => <Home />} />
    <Route exact path="/login" component={() => <Login />} />
    <Route exact path="/signup" component={() => <Signup />} />
  </Switch>
);

export default App;
