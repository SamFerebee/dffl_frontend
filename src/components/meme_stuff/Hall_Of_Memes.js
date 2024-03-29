import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Hall_Of_Memes = ({sendToUploadMeme}) => {
    const [allMemes, setAllMemes] = useState(null);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_URL}/hall_of_memes`)
            .then(r=>r.json())
            .then(d=>{
                //setImg(<span>{d[0].title}<br/><img src={d[0].file.url} /></span>);
                let temp = [];
                d.forEach((data)=>{
                    const link = `/view_meme/${data.id}`;
                    let t = <Link to={link} key={data.id}><span >{data.title}<br/><img className="memePic" src={data.file.url}/><br/></span></Link>
                    temp.push(t);
                })
                setAllMemes(temp);
            })
    }, [])


    return(
        <span>
            <h1>MEMES</h1>
            <button onClick={sendToUploadMeme}>Upload Memes Here</button><br></br><br></br>
            {allMemes}
        </span>
    )
}

export default Hall_Of_Memes