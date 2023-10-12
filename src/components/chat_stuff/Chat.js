import React, { useState, useEffect } from "react"

const Chat = ({user}) =>{
    const [chatBox, setChatBox] = useState(<div id="chatbox"></div>)
    const [currentMessage, setCurrentMessage] = useState("");
    const [chatActive, setChatActive] = useState(true);


    useEffect(()=>{
        const interval = setInterval(()=>{
            fetchChatData();
        }, 500)
        return () => clearInterval(interval);
    }, [])

    const fetchChatData =  async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_chat`);
            if (!response.ok) {throw Error(response.statusText);}
            const d = await response.json();
            let temp = [];
            d.forEach((d)=>{
                let isSelf;
                let t;
                d.author.username === user.username ? isSelf = true : isSelf = false;
                if(isSelf){
                    t = <div style={{wordBreak: "break-all"}} key={d.id} className="own-message">
                        <span style={{fontStyle: "italic"}}>Me</span><br/>
                        {d.message}<br/> <br/>
                    </div>
                }else{
                    t = <div style={{wordBreak: "break-all"}} key={d.id} className="other-message">
                        {d.author.username} <br/>
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
        fetch(`${process.env.REACT_APP_BACKEND_URL}/submit_chat`,{
            method: "POST",
            body: formData
        })
            .then(r=>r.json())
            .then()
        setCurrentMessage("");
    }

    const changeMessage = e =>{
        setCurrentMessage(e.target.value);
    }

    const chatForm = <form id="chatForm" onSubmit={submitChatMessage}>
        <textarea value={currentMessage} onChange={changeMessage}/>
        <input type="submit"/>
    </form>

    const clickedMinButton = () =>{
        setChatActive(s=>!s);
    }


    const flipButton = <button onClick={clickedMinButton}>Hide Chat</button>;
    const showButton = <button onClick={clickedMinButton}>Show Chat</button>;

    return(
        <div className="fullChatDiv">
            {chatActive ? flipButton : showButton}
            {chatActive ? chatBox : null}
            {chatActive ? chatForm : null}
        </div>
    )
}

export default Chat