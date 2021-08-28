import React, { useState, useEffect, useRef } from "react"

const LoginOrCreate = ({sendToLogin, sendToCreate}) => {

    return(
        <span id="logOrCreateBox">
            <button className="buttonStandard" onClick={sendToLogin}>Login</button><br></br><br></br><span>or</span><br></br><br></br>
            <button className="buttonStandard" onClick={sendToCreate}>Create An Account</button>
        </span>
    )
}

export default LoginOrCreate