import React, { useState, useEffect } from "react"

const Home = ({setCurrentUser, user, sendToLanding}) => {

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
        sendToLanding();
    }

    return(
        <span>
             <h1 style={{color: "red"}}>{user.username}</h1>
             <img src={user.avatar.url}/>
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
        </span>
    )
}

export default Home