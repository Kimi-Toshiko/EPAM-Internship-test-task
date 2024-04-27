import React from 'react';
import './App.css';
import Garage from './TSComponents/Garage';
import Winners from './TSComponents/Winners';
import Navbar from './TSComponents/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={'/'} component={Garage}></Route>
            <Route exact path={'/winners'} component={Winners}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
