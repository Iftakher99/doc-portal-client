import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/appointment'>
          <Appointment></Appointment>
        </Route>
        <Route path='/dashboard/appointment'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/dashboard/allpatients'>
          <AllPatients></AllPatients>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
