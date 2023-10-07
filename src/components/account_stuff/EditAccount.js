import React, { useState, useEffect } from "react"

const EditAccount = ({user, setUser, sendToHome}) =>{
    const [formInfo, setFormInfo] = useState({
        original: user.username,
        name: "",
        email:""
    })
    const [avatar, setAvatar] = useState(null);

    const handleChange = e =>{
        let t = {...formInfo, [e.target.name]: e.target.value};
        setFormInfo(t);
    }

    const edit = e =>{
        e.preventDefault();
        handleEdit();
    }

    const handleEdit = () =>{
        const formData = new FormData();
        formData.append("original", formInfo.original)
        formData.append("username", formInfo.name);
        formData.append("email", formInfo.email);
        formData.append("avatar", avatar);
        fetch(`${process.env.REACT_APP_BACKEND_URL}/edit_account`,{
            method: "PATCH",
            body: formData
        })
            .then(r=> r.json())
            .then(result =>{
                console.log(result);
                setUser(result);
                sendToHome();
            })
    }

    return(
        <div className="editAccount">
            Update the field(s) you would like to edit<br></br><br></br>
            <form id="editAccountForm" onSubmit={edit}>
                <span>Username:</span> <input id="updateUserField" type="text" name="name" value={formInfo.name} onChange={handleChange} placeholder={user.username}/><br></br>
                <span>Email:</span> <input id="emailUpdateField" type="text" name="email" value={formInfo.email} onChange={handleChange} placeholder={user.email}/><br></br>
                <span>Picture:</span><input type="file" name="avatar" placeholder="Avatar" onChange={(e) => setAvatar(e.target.files[0])}/><br></br><br></br>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default EditAccount