import React, { useState, useEffect, useRef } from "react"

const LandingPage = ({sendToLoginOrCreate}) => {
    const [revealString, setRevealString] = useState("");
    const fullDFFLString = "DFFL", index = useRef(0);
    const [enterString, setEnterString] = useState("");
    const [deltaString, setDeltaString] = useState("");
    const fullDeltaString = ["Delta Class", " Fantasy", " Football",  " League"];

    useEffect(()=>{
        function tick(){
            setRevealString(prev => prev + fullDFFLString[index.current]);
            index.current++;
        }
        if(index.current < fullDFFLString.length){
            let addChar = setInterval(tick,500);
            return () => clearInterval(addChar);
        }
    }, [revealString]);

    // useEffect(() =>{
    //     function tick(){
    //         setDeltaString(prev => prev + fullDeltaString[deltaIndex.current]);
    //         deltaIndex.current++;
    //     }
    //     if(deltaIndex.current < fullDeltaString.length){
    //         let addChar = setInterval(tick,10);
    //         return () => clearInterval(addChar);
    //     }
    // }, [deltaString]);
    useEffect(()=>{
        setTimeout(function(){
            for(let i = 0; i < fullDeltaString.length; ++i){
                setTimeout(function() {
                    setDeltaString(prev => prev + fullDeltaString[i]);
                }, i * 500)
            }
        }, 500);
        
        setTimeout(function(){ 
            setEnterString(<button className="buttonStandard" onClick={sendToLoginOrCreate}>ENTER</button>);
        }, 2500);
    }, [])

    return(
        <>
         <span className="landingRevealString">{revealString}</span>
         <span id="deltaText">{deltaString}</span>
         <span className="enterText">{enterString}</span>
        </>
    )
}

export default LandingPage