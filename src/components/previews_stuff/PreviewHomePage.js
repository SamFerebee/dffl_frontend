import React, { useState, useEffect } from "react"
import ReactTooltip from "react-tooltip";

const PreviewHomePage = () =>{

    return(
    <div className="previewsHomePageList">
        <div>
        <iframe width="750" height="500" 
        src="https://www.youtube.com/embed/bF48Us34L-o?si=idbh_tx-CLiMa6Wz" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        </div>
    </div>
    )
}

export default PreviewHomePage