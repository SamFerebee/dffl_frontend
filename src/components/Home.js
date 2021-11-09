import React, { useState, useEffect } from "react"
import StandingsTable from "./homepage_stuff/StandingsTable";
import {ChatEngine} from 'react-chat-engine'
import {animateScroll} from "react-scroll"

const Home = ({setCurrentUser, user, sendToLanding, sendToAllTimePage, sendToUploadMeme}) => {
    const [chatBox, setChatBox] = useState(<div id="chatbox">HELLO</div>)
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(()=>{
        fetchChatData();
    }, [chatBox])

    const fetchChatData =  async () => {
        try {
            const response = await fetch('http://localhost:3000/get_chat');
            if (!response.ok) {throw Error(response.statusText);}
            const d = await response.json();
            let temp = [];
            d.forEach((d)=>{
                let isSelf;
                let t;
                d.author === user.username ? isSelf = true : isSelf = false;
                if(isSelf){
                    t = <div style={{wordBreak: "break-all"}} key={d.id} className="own-message">
                        <span style={{fontStyle: "italic"}}>Me</span><br/>
                        {d.message}<br/> <br/>
                    </div>
                }else{
                    t = <div style={{wordBreak: "break-all"}} key={d.id} className="other-message">
                        {d.author} says: <br/>
                        {d.message}<br/> <br/>
                    </div>
                }
                temp.push(t);
            })
            setChatBox(
                <div id="chatbox" s>
                    {temp}
                </div>
            )
            let s = document.getElementById("chatbox");
            s.scrollTop = s.scrollHeight;
        }
        catch (error) {console.log(error);}
    }

    const submitChatMessage = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user', user.username);
        formData.append('message', currentMessage);
        fetch("http://localhost:3000/submit_chat",{
            method: "POST",
            body: formData
        })
            .then(r=>r.json())
            .then(d=>console.log(d))
    }

    const changeMessage = e =>{
        setCurrentMessage(e.target.value);
    }

    const chatForm = <form onSubmit={submitChatMessage}>
        <textarea value={currentMessage} onChange={changeMessage}/>
        <input type="submit"/>
    </form>

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
            {/* <ChatEngine
                publicKey={"7d6ce1ed-2445-466a-92a6-72e087b10e68"}
                userName={user.chat_username}
                userSecret={user.chat_secret}
            /> */}
            {chatBox}
            {chatForm}
        </span>
    )
}

export default Home