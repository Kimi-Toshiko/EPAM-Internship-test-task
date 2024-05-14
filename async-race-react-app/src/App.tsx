import './App.css';
import Garage from './TSComponents/Pages/Garage';
import Winners from './TSComponents/Pages/Winners';
import Navbar from './TSComponents/Pages/Navbar';
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
