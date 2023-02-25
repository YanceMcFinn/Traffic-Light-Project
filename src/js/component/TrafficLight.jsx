import React, { useState } from "react"


function TrafficLight(){
    const [light, setLight] = useState(null)
    let isSelectedR = ""
    let isSelectedY = ""
    let isSelectedG = ""
    let isSelectedP = ""
    
    if (light == "red"){
        isSelectedR="selectedRed"
    };
    if (light == "yellow"){
        isSelectedY="selectedYellow"
    };
    if (light == "green"){
        isSelectedG="selectedGreen"
    };
    if (light == "purple"){
        isSelectedP="selectedPurple"
    };
    const addPurple = () => {
        document.getElementById("purple").style.display = "inline";
    }
    const removePurple = () => {
        document.getElementById("purple").style.display = "none";    
    }
    let i = 0;
    function cycleColors() {
            var lights = ["red", "yellow", "green"]
            setLight(lights[i])
            console.log(lights[i])
            i++;
            if (i == 3){
                i = 0
            }

                
        }

    return(
    <><div id="trafficTop"></div>
    <div id="mainLight">
             <div className= {"red light" + " " + isSelectedR} onClick={()=>setLight("red")}></div>
             <div className={"yellow light" + " " + isSelectedY} onClick={()=>setLight("yellow")}></div>
             <div className={"green light" + " " + isSelectedG} onClick={()=>setLight("green")}></div>
             <div className={"purple light" + " " + isSelectedP} onClick={()=>setLight("purple")} id="purple"></div>
         </div>
         <div id="buttonContainer">
           <button className="purpsButton" onClick={addPurple}> Add purple</button>
             <button className="purpsButton" onClick={removePurple}> Remove purple</button>
             <button onClick={cycleColors}> Cycle Colors</button>
         </div></>)
};
export default TrafficLight;