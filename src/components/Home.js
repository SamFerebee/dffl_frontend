import React, { useState, useEffect } from "react"
import StandingsTable from "./homepage_stuff/StandingsTable";
import {ChatEngine} from 'react-chat-engine'
import {animateScroll} from "react-scroll"
import Chat from "./chat_stuff/Chat";

const Home = ({setCurrentUser, user, sendToLanding, sendToAllTimePage, sendToMemes, sendToUploadMeme}) => {

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
        sendToLanding();
    }

    return(
        <span>
             <h1 className="homeHeaders" style={{color: "red"}}>Welcome to the Official DFFL Website</h1>
             {/* <button onClick={sendToAllTimePage} style={{color: "red"}}>All Time</button> */}
             <span id="burgerMenuToggle">
                <input type="checkbox" id="revealCheck"/>
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
                <ul id="burgerMenu">
                    <li onClick={handleLogout} className="burgeroption">Logout</li>
                    <li className="burgeroption">Edit Account</li>
                    <li className="burgeroption">Delete Account</li>
                </ul>
            </span>
            <h2 className="homeHeaders" style={{color: "blue"}}>Current Standings</h2>
            <span id="homeStandingsSpan">
                <StandingsTable />
            </span>
            <button onClick={sendToUploadMeme} style={{color: "red"}}>Upload Meme</button>
            <button onClick={sendToMemes}>Memes</button>
            <br/><br/>
            <Chat user={user} />
        </span>
    )
}

export default Home