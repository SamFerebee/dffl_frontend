import React, { useState, useEffect } from "react"

const Upload_Meme = ({sendToHallOfMemes, user}) => {
    const [memeTitle, setMemeTitle] = useState("");
    const [memeFile, setMemeFile] = useState(null);
   
    useEffect(()=>{
        console.log(user)
    },[])

    const handleChange = e => {
        if(e.target.name === "memeTitle"){
            setMemeTitle(e.target.value);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        createMeme();
    }

    const createMeme = () => {
        const formData = new FormData();
        formData.append("title", memeTitle);
        formData.append("file", memeFile);
        formData.append("user", user.id);
        fetch("http://localhost:3000/upload_meme" ,{
            method: "POST",
            body: formData
        })
            .then(r=>r.json())
            .then(d=>{
                sendToHallOfMemes();
            })
    }

    return(
        <div>
            <h1>Upload meme</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="memeTitle" placeholder="Meme Title" value={memeTitle} onChange={handleChange}/>
                <p></p><p></p>
                <input type="file" name="memeFile" placeholder="File" onChange={(e) => setMemeFile(e.target.files[0])}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Upload_Meme