import React, { useState, useEffect } from "react";

import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import Contacts from "./components/contacts/Contacts";
import MedsList from "./components/MedsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import axios from 'axios'

// use effect with axios calls to set state with data from api call
// then pass down data to MedsList as props

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


  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    const fetchMedicine = async () => {
      const response = await axios('http://localhost:8080/medications');
      const data = await response
      setMedicine(data.data);
    };
    fetchMedicine();
  }, []);

  return (
    < Router >
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contacts">
            <Contacts contacts={contacts}/>
          </Route>
          <Route path="/medications"
            render={(props) => <MedsList {...props}
              medicine={medicine}
            />}
          />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
