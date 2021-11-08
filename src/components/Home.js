import React, { useState, useEffect } from "react"
import StandingsTable from "./homepage_stuff/StandingsTable";
import {ChatEngine} from 'react-chat-engine'

const Home = ({setCurrentUser, user, sendToLanding, sendToAllTimePage, sendToUploadMeme}) => {

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
        sendToLanding();
    }

    return(
        <span>
             <h1 style={{color: "red"}}>{user.username}</h1>
             <img src={user.avatar.url}/>
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
            {/* <StandingsTable /> */}
            <button onClick={sendToUploadMeme} style={{color: "red"}}>Upload Meme</button>
            <br/><br/>
            <ChatEngine
                publicKey={"7d6ce1ed-2445-466a-92a6-72e087b10e68"}
                userName={user.chat_username}
                userSecret={user.chat_secret}
            />
        </span>
    )
}

export default Home