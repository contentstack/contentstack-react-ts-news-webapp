import * as React from 'react';
import { render } from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';

const routing = (
    <Router>
      <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
render(routing, document.getElementById('main'));
