import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import LoginOrCreate from "./components/account_stuff/LoginOrCreate";
import Login from "./components/account_stuff/Login";
import CreateAccount from "./components/account_stuff/CreateAccount";
import Home from "./components/Home";
import AllTimePage from "./components/all_time_stuff/AllTimePage";
import Upload_Meme from "./components/meme_stuff/Upload_Meme";
import Hall_Of_Memes from "./components/meme_stuff/Hall_Of_Memes";
import View_Meme from "./components/meme_stuff/View_Meme";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const sendToLanding = () => history.push("/");
  const sendToLoginOrCreate = () => history.push("/log_or_create");
  const sendToLogin = () => history.push("/login");
  const sendToCreateAccount = () => history.push("/create_account");
  const sendToHome = () => history.push("/home");
  const sendToAllTimePage = () => history.push("/all_time_data")
  const sendToUploadMeme = () => history.push("/upload_meme");
  const sendToHallOfMemes = () => history.push("/hall_of_memes");

  useEffect(()=>{
    console.log("useEffect in app is running")
  },[])

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
          <Home setCurrentUser={setCurrentUser} user={currentUser} sendToLanding={sendToLanding} sendToAllTimePage={sendToAllTimePage} sendToUploadMeme={sendToUploadMeme} sendToMemes={sendToHallOfMemes}/>
        </Route>
        <Route exact path = "/all_time_data">
          <AllTimePage />
        </Route>
        <Route exact path = "/upload_meme">
          <Upload_Meme user={currentUser} sendToHallOfMemes={sendToHallOfMemes}/>
        </Route>
        <Route exact path ="/hall_of_memes">
          <Hall_Of_Memes user={currentUser}/>
        </Route>
        <Route exact path ="/view_meme/:id">
          <View_Meme user={currentUser} setUser={setCurrentUser}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
