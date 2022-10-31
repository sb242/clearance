import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import MedsList from "./components/MedsList";
import UserDisplay from "./components/UserDisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// use effect with axios calls to set state with data from api call
// then pass down data to MedsList as props

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UserDisplay} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/medications" component={MedsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
