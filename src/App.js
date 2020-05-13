import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from './services/context';

import './App.css';

import Index from './components/layout/Index';

class App extends Component {
  render() {
    console.log('Production App 4.0');
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <div className="App">
              <Switch>
                <Route exact path="" component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
