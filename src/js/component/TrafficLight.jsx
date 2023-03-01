import React, { useState } from "react"

function TrafficLight(){
    const [light, setLight] = useState(null)
    const [counter, setCounter] = useState(0)
    const [purple, setPurple] = useState(false)
    let isSelectedR = ""
    let isSelectedY = ""
    let isSelectedG = ""
    let isSelectedP = ""
    
    if (light == "red"){
        isSelectedR="selectedRed";
        
    };
    if (light == "yellow"){
        isSelectedY="selectedYellow";
        
    };
    if (light == "green"){
        isSelectedG="selectedGreen"
    };
    if (light == "purple"){
        isSelectedP="selectedPurple"
    };
    const addPurple = () => {
        document.getElementById("purple").style.display = "inline";
        setPurple(true);
    }
    const removePurple = () => {
        document.getElementById("purple").style.display = "none";
        setPurple(false);   
    }

    function cycleColors() {
            if (purple == false){
                var lights = ["red", "yellow", "green"]
                setLight(lights[counter])
                console.log(lights[counter])
                setCounter(counter + 1)
                if (counter == 2){
                    setCounter(0)
                }
            }
            else {
                var lights = ["red", "yellow", "green", "purple"]
                setLight(lights[counter])
                console.log(lights[counter])
                setCounter(counter + 1)
                if (counter == 3){
                    setCounter(0)
                }
            }

                
        }

        
    return(
    <><div id="bgDiv"></div><div id="trafficTop"></div>
    <div id="mainLight">
             <div className= {"red light" + " " + isSelectedR} onClick={()=>setLight("red")}></div>
             <div className={"yellow light" + " " + isSelectedY} onClick={()=>setLight("yellow")}></div>
             <div className={"green light" + " " + isSelectedG} onClick={()=>setLight("green")}></div>
             <div className={"purple light" + " " + isSelectedP} onClick={()=>setLight("purple")} id="purple"></div>
         </div>
         <div id="buttonContainer">
           <button className="purpsButton" onClick={addPurple}> Add purple</button>
             <button className="purpsButton" onClick={removePurple}> Remove purple</button>
             <button onClick={cycleColors} id="cycleButton"> Cycle Colors</button>
         </div></>)
};
export default TrafficLight;