import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeaguePage from "./Components/LeaguePage/LeaguePage";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/leaguePage">
            <LeaguePage />
          </Route>
          <Route exact path="/">
            <LeaguePage />
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
