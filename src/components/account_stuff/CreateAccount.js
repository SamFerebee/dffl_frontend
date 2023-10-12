import React, { useState, useEffect, useRef } from "react"

const CreateAccount = ({setCurrentUser, sendToHome}) => {
    const [createFormInfo, setCreateFormInfo] = useState({
        username: "",
        email: "",
        password: "",
        confirmation: ""
      })
    
    const [avatar, setAvatar] = useState(null);

    const handleCreateChange = e => {
        const key = e.target.name;
        const val = e.target.value;
        let temp = {...createFormInfo, [key]: val};
        setCreateFormInfo(temp);
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      createAccount(createFormInfo);
    }

    const createAccount = accountInfo => {
        const formData = new FormData();
        formData.append("username", createFormInfo.username);
        formData.append("email", createFormInfo.email);
        formData.append("password", createFormInfo.password);
        formData.append("confirmation", createFormInfo.confirmation);
        formData.append("avatar", avatar);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/create_account`, {
          method: "POST",
          body: formData
        })
          .then(r=>r.json())
          .then(result => {
            if (result.username){
              setCurrentUser(result);
              sendToHome();
              localStorage.setItem("user", result);
            }else{
              alert(result);
            }
          })
      }

    return(
        <span id="createAcctBox">
          <form onSubmit={handleSubmit}>
            <input className="signupField" type="text" name="username" placeholder="Username" onChange={handleCreateChange} value={createFormInfo.name}/>
            <p></p><input className="signupField" type="email" name="email" placeholder="Email" onChange={handleCreateChange} value={createFormInfo.email}/>
            <p></p>Picture <input type="file" name="avatar" placeholder="Avatar" onChange={(e) => setAvatar(e.target.files[0])}/>
            <p></p><input className="signupField" type="password" name="password" placeholder="Password" onChange={handleCreateChange} value={createFormInfo.password}/>
            <p></p><input className="signupField" type="password" name="confirmation" placeholder="Confirm Password" onChange={handleCreateChange} value={createFormInfo.confirmation}/><br></br><br></br>
            <input className="aFormSubmit" type="submit" id="createAcctSubmit" value="Create Account"/>
          </form>
        </span>
    )
    
}

export default CreateAccount