import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { About } from './Pages/About/About';
import { Home } from './Pages/Home/Home';
import { Contact } from './Pages/Contact/Contact';
import { Header } from './Components/Header/Header';
import { Services } from './Pages/Services/Services';
import { Gallery } from './Pages/Gallery/Gallery';
import { Team } from './Pages/Team/Team';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com', httpClient);


function App() {
  return (
    <Router>
       
        
        
      <Switch>
      <Route path="/admin">
          <Admin dataProvider={dataProvider} >
            <Resource/>
          </Admin>
        </Route>
        <Header/>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/team">
          <Team/>
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
