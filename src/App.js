import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Garage from "./routes/Makerspace/Garage/Garage";
import MachinesRoute from "./routes/Machines/MachinesRoute";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/makerspaces/the-garage" component={Garage} exact />
        <Route
          path="/makerspaces/the-garage/:machineName"
          component={MachinesRoute}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
