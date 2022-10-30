import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import Login from "./components/login";
import MedsList from "./components/MedsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// use effect with axios calls to set state with data from api call
// then pass down data to MedsList as props

const currentData = [
  {
    key: '1',
    name: 'Advil',
    purpose: 'Migraines',
    dosage_number: 3,
    dosage_unit: 'pills',
    frequency: 'daily',
    hp_id: "OTC",
    start_date: "Jan 1, 2022",
    end_date: ""
  },
  {
    key: '2',
    name: 'Enalapril',
    purpose: 'Hypertension',
    dosage_number: 2.5,
    dosage_unit: 'mg',
    frequency: 'daily',
    hp_id: "Dr Jane Doe",
    start_date: "Jun 1, 2000",
    end_date: ""
  },
  {
    key: '3',
    name: 'Metformin',
    purpose: 'Diabetes',
    dosage_number: 5,
    dosage_unit: 'mL',
    frequency: 'twice per day',
    hp_id: "John Brown",
    start_date: "May 7, 1995",
    end_date: ""
  }
];

const priorData = [
  {
    key: '1',
    name: 'Prozac',
    purpose: 'Depression',
    dosage_number: 20,
    dosage_unit: 'mg',
    frequency: 'daily',
    hp_id: "John Brown",
    start_date: "Jan 15, 2000",
    end_date: "Mar 30, 2010"
  },
  {
    key: '2',
    name: 'Codein',
    purpose: 'Pain relief',
    dosage_number: 15,
    dosage_unit: 'mL',
    frequency: 'every four hours',
    hp_id: "Dr Jane Doe",
    start_date: "Jun 17, 2005",
    end_date: "Aug 2, 2006"
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/medications"
            render={(props) => <MedsList {...props}
              currentData={currentData}
              priorData={priorData} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
