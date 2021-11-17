import React, { useState, useEffect, useRef } from "react"

const Login = ({setCurrentUser, sendToHome}) => {
    const [formInfo, setFormInfo] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...formInfo, [key]: val};
        setFormInfo(temp);
    }

    const login = e => {
        e.preventDefault();
        handleLogin(formInfo);
    }

    const handleLogin = formInfo => {
        fetch("http://localhost:3000/login",{
          method: "POST",
          headers:{
            "Content-type": "application/json"
          },
          body: JSON.stringify(formInfo)
        })
          .then(r=> r.json())
          .then(result => {
            if (result.username){
              setCurrentUser(result);
              localStorage.setItem("user", result);
              sendToHome();
            }else{
              alert(result);
            }
          })
      }

    return(
        <span id="loginBox">
          <form onSubmit={login}>
              <input className="loginField" type="text" name="username" placeholder="Username" onChange={handleChange} value={formInfo.name}/> <br></br><br></br>
              <input className="loginField" type="password" name="password" placeholder="Password" onChange={handleChange} value={formInfo.password}/> <br></br><br></br>
              <input className="aFormSubmit" type="submit" id="loginSubmit" value="Login"/>
          </form>
        </span>
    )
}

export default Login