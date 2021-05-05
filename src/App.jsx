import React, { useState } from "react";

const App = () =>{

    const color = "#8e44ed";
    const [currBg, setBg] = useState(color);
    const [name, setname] = useState("Click Me")
    const bgChange = () =>{
        //console.log("cliec");
        let bg = "yellow";
        setBg(bg);
        setname("ouch");
        
    }
    return(
        <>
            <div style={{backgroundColor:currBg}}>
                <button onClick={bgChange}> {name} </button>
            </div>
        </>
    );
}

export  default App;