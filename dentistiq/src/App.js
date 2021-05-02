import './App.css';
import { Route, Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <p>react App Dentistiq</p>
      
      <Switch>
        <Route path="/admin">

        </Route>
        <Route path="/about">

        </Route>
        <Route path="/contact">

        </Route>
        <Route path="/gallery">

        </Route>
        <Route path="/team">

        </Route>
        <Route path="/services">

        </Route>
        <Route path="/">

        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
