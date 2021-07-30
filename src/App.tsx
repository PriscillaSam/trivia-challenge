import './index.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Welcome from 'screens/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
