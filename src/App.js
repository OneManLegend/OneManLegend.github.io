import './App.css';
import {BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Project';
import Contact from './pages/Contact';
function App() {
  return (
     <Router>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      </Router>
  );
}

export default App;
