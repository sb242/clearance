import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import Contacts from "./components/contacts/contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
