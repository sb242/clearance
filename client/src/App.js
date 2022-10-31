import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import Contacts from "./components/contacts/Contacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [contacts, setContacts] = useState([]);

  const fetchContacts = function() {
    /* ---
    Hard coded patient id will need to change
    --- */
    return axios.get("/contacts?patientID=1")
    .then((res) => {
      return res.data.contacts
    })
  }

  useEffect(() => {
    fetchContacts()
    .then((data) => {
      setContacts(data)
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contacts">
            <Contacts contacts={contacts}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
