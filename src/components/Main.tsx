import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Devices } from './Devices';

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/alldevices" component={Devices} />
      </Switch>
    </Router>
  );
};

export default Main;
