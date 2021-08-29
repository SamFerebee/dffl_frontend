import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import LoginOrCreate from "./components/account_stuff/LoginOrCreate";
import Login from "./components/account_stuff/Login";
import CreateAccount from "./components/account_stuff/CreateAccount";
import Home from "./components/Home";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const sendToLanding = () => history.push("/");
  const sendToLoginOrCreate = () => history.push("/log_or_create");
  const sendToLogin = () => history.push("/login");
  const sendToCreateAccount = () => history.push("/create_account");
  const sendToHome = () => history.push("/home");
  return (
    <>
      <Switch>
        <Route exact path = "/">
          <LandingPage sendToLoginOrCreate={sendToLoginOrCreate}/>
        </Route>
        <Route exact path = "/log_or_create">
          <LoginOrCreate sendToLogin={sendToLogin} sendToCreate={sendToCreateAccount}/>
        </Route>
        <Route exact path = "/login">
          <Login setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>
        </Route>
        <Route exact path = "/create_account">
          <CreateAccount setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>
        </Route>
        <Route exact path = "/home">
          <Home setCurrentUser={setCurrentUser} user={currentUser} sendToLanding={sendToLanding}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
