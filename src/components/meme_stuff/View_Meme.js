import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const View_Meme = () => {
    const params = useParams();
    const id = parseInt(params.id);
    const [theMeme, setTheMeme] = useState(null);
    const [theDisplay, setTheDisplay] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/view_meme/${id}`)
            .then(r=>r.json())
            .then(d=>{
                setTheDisplay(
                    <span>
                        <h1>{d.title}</h1>
                        Created by: {d.user.username}<br/>
                        rating: {d.rating}<br/>
                    <   img src={d.file.url}/>
                    </span>
                )
            })

    },[])
    return(
        <span>
            {theDisplay}

        </span>
    )
}

export default View_Meme