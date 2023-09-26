import React, { useState, useEffect } from "react"
import StandingsTable from "./homepage_stuff/StandingsTable";
import {ChatEngine} from 'react-chat-engine'
import {animateScroll} from "react-scroll"
import Chat from "./chat_stuff/Chat";
import ReactTooltip from "react-tooltip";
import Popup from "reactjs-popup";


const Home = ({setCurrentUser, user, sendToLanding, sendToAllTimePage, sendToMemes, sendToUploadMeme}) => {

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
        sendToLanding();
    }

    return(
    <span>
        <h1 className="homeHeaders" style={{color: "red"}}>Welcome to the Official DFFL Website</h1>
        <h2 className="homeHeaders" style={{color: "blue"}}>2023 Season Standings</h2>
        <span id="homeStandingsSpan">
            <StandingsTable/>
        </span>
        <Chat user={user}/>
    </span>
    )
}

export default Home