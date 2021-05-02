import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { About } from './Pages/About/About';

function App() {
  return (
    <Router>
      <div>
        <p>react App</p>
      
      <Switch>
        <Route path="/admin">

        </Route>
        <Route path="/about">
          <About/>
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
