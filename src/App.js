import React, { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import LandingPage from "./components/LandingPage";
import LoginOrCreate from "./components/account_stuff/LoginOrCreate";
import Login from "./components/account_stuff/Login";
import CreateAccount from "./components/account_stuff/CreateAccount";
import Home from "./components/Home";
import AllTimePage from "./components/all_time_stuff/AllTimePage";
import Upload_Meme from "./components/meme_stuff/Upload_Meme";
import Hall_Of_Memes from "./components/meme_stuff/Hall_Of_Memes";
import View_Meme from "./components/meme_stuff/View_Meme";
import EditAccount from "./components/account_stuff/EditAccount";
import PreviewHomePage from "./components/previews_stuff/PreviewHomePage"
import AdminPanel from "./components/admin_stuff/AdminPanel";
import Chat from "./components/chat_stuff/Chat";

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const sendToLanding = () => navigate("/");
  const sendToLoginOrCreate = () => navigate("/log_or_create");
  const sendToLogin = () => navigate("/login");
  const sendToCreateAccount = () => navigate("/create_account");
  const sendToHome = () => navigate("/home");
  const sendToAllTimePage = () => navigate("/all_time_data")
  const sendToUploadMeme = () => navigate("/upload_meme");
  const sendToHallOfMemes = () => navigate("/hall_of_memes");
  const sendToEditAccount = () => navigate("/edit_account");
  const sendToPreviewHome = () => navigate("/previews");

  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    sendToLanding();
  }

  const x =        
  <span>
    <span id="burgerMenuToggle">
      <input type="checkbox" id="revealCheck"/>
      <span className="burger"></span>
      <span className="burger"></span>
      <span className="burger"></span>
      <ul id="burgerMenu">
        <li className="burgeroption" onClick={sendToHome}>Home</li>
          <li className="burgeroption" onClick={sendToPreviewHome}>Matchup Previews</li>
          <li className="burgeroption" onClick={sendToHallOfMemes}>Hall of Memes</li>
          <li className="burgeroption" onClick={sendToAllTimePage}>All Time Standings</li>
          <li className="burgeroption" onClick={handleLogout}>Logout</li>
          <li className="burgeroption" onClick={sendToEditAccount}>Edit Account</li>
          <li className="burgeroption">Delete Account</li>
      </ul>
  </span>
</span>

  return (
    <>
    {currentUser == null ? null: x}
    <Routes>
      <Route path = "/" element={<LandingPage sendToLoginOrCreate={sendToLoginOrCreate}/>}>
      </Route>
      <Route path = "/dffl_frontend" element={<LandingPage sendToLoginOrCreate={sendToLoginOrCreate}/>}>
      </Route>
      <Route path = "/log_or_create" element={<LoginOrCreate sendToLogin={sendToLogin} sendToCreate={sendToCreateAccount}/>}>
      </Route>
      <Route path = "/login" element={<Login setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>}>
      </Route>
      <Route path = "/create_account" element={<CreateAccount setCurrentUser={setCurrentUser} sendToHome={sendToHome}/>}>
      </Route>
      <Route path = "/edit_account" element={<EditAccount setUser={setCurrentUser} sendToHome={sendToHome} user={currentUser}/>}/>
      <Route path = "/home" element={<Home setCurrentUser={setCurrentUser} user={currentUser} sendToLanding={sendToLanding} sendToAllTimePage={sendToAllTimePage} sendToUploadMeme={sendToUploadMeme} sendToMemes={sendToHallOfMemes}/>}>
      </Route>
      <Route path = "/all_time_data" element={<AllTimePage />}>
      </Route>
      <Route path = "/upload_meme" element={<Upload_Meme user={currentUser} sendToHallOfMemes={sendToHallOfMemes}/>}>
      </Route>
      <Route path ="/hall_of_memes" element={<Hall_Of_Memes user={currentUser} sendToUploadMeme={sendToUploadMeme}/>}>
      </Route>
      <Route path ="/view_meme/:id" element={<View_Meme user={currentUser} setUser={setCurrentUser}/>}>
      </Route>
      <Route path = "/previews" element={<PreviewHomePage user={currentUser}/>}/>
    </Routes>
    {currentUser == null ? null : <Chat user={currentUser}/>}
    </>
  );
}

export default App;
