import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const View_Meme = ({user, setUser}) => {
    const params = useParams();
    const id = parseInt(params.id);
    const [theDisplay, setTheDisplay] = useState(null);
    const [canRate, setCanRate] = useState(null);
    const [rating, setRating] = useState(null);
    const [currentComment, setCurrentComment] = useState("");
    const [allComments, setAllComments] = useState([]);
    let allUsers = {};


    const submitRating = e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("rating", rating);
        formData.append("user", user.id);
        formData.append("meme", id);
        fetch("http://localhost:3000/rate_meme",{
            method: "PATCH",
            body: formData

        })
            .then(r=>r.json())
            .then(d=>{
                setCanRate(false);
                setTheDisplay(
                    <span>
                        <h1>{d.title}</h1>
                        Created by: {d.user.username}<br/>
                        rating: {d.average_rating}<br/>
                        <img src={d.file.url}/>
                    </span>
                )
                populateComments(d.comments);
            })
    }

    const changeRating = e =>{
        setRating(e.target.value)
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/get_user/${user.id}`)
            .then(r=>r.json())
            .then(d=>setUser(d))

    },[theDisplay])

    const rateMeme = <form onSubmit={submitRating}>
        Rating 1-10: <input type="number" step="0.1" onChange={changeRating} value={rating}/>
        <br/>
        <input type="submit" />
    </form>

    const submitComment = e =>{
        e.preventDefault();
        setCurrentComment("");
        const formData = new FormData();
        formData.append("user", user.id);
        formData.append("meme", id);
        formData.append("comment", currentComment);
        fetch("http://localhost:3000/create_comment",{
            method: "POST",
            body: formData
        })
            .then(r=>r.json())
            .then(d=>{
                setTheDisplay(
                    <span>
                        <h1>{d.title}</h1>
                        Created by: {d.user.username}<br/>
                        rating: {d.average_rating}<br/>
                        <img src={d.file.url}/>
                    </span>
                )
                populateComments(d.comments);
            })
    }

    const changeComment = e =>{
        setCurrentComment(e.target.value);
    }

    const userComment = <form onSubmit={submitComment}>
        <textarea onChange={changeComment} rows="8" cols="50" value={currentComment}/>
        <br/><input type="submit" value="Submit Comment"/>
    </form>


    const populateComments = comments => {
        let temp;
        let t = [];
        comments.forEach((comment)=>{
            temp = <div key={comment.id}>
                <img src={allUsers[comment.user.username].toString()} />{comment.user.username}<br/>
                <img src={comment.user.avatar}/>
                {comment.comment}<br/>
            </div>
            t.push(temp);
        })
        setAllComments(t);
    }

    useEffect(()=>{

        fetch("http://localhost:3000/all_users")
                .then(r=>r.json())
                .then(d=>{
                    d.forEach((d)=>{
                        allUsers[d.username] = d.avatar.url;
                    })
                    console.log(allUsers)
                    console.log(allUsers["sam"])
                })

        user.memes_rated.includes(id.toString()) ? setCanRate(false) : setCanRate(true);
        fetch(`http://localhost:3000/view_meme/${id}`)
            .then(r=>r.json())
            .then(d=>{
                setTheDisplay(
                    <span>
                        <h1>{d.title}</h1>
                        Created by: {d.user.username}<br/>
                        rating: {d.average_rating}<br/>
                        <img src={d.file.url}/>
                    </span>
                )
                populateComments(d.comments)
            })

    },[])
    return(
        <span>
            {theDisplay}
            <br/>
            {canRate ? rateMeme : null}
            <br />
            {userComment}
            <h3>COMMENTS</h3>
            {allComments}
            

        </span>
    )
}

export default View_Meme