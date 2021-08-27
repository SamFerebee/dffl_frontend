import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import LandingPage from "./components/LandingPage";

function App() {
  const history = useHistory();
  return (
    <>
      <Switch>
        <Route exact path = "/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
