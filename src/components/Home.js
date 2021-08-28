import React, { useState, useEffect } from "react"

const Home = ({user}) => {
    return(
        <span>
             <h1 style={{color: "red"}}>{user.username}</h1>
             <img src={user.avatar.url}/>
        </span>
    )
}

export default Home