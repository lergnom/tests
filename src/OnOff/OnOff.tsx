import React, {useState} from 'react'
import UncontrollerAccordion from "./UncontrollerAccordion";

type PropsType = {
    on: boolean
}


function OnOff() {

    let [on, setOn] = useState(false)

    const onStyle = {
        cursor: "pointer",
        padding: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        ...onStyle,
        marginLeft: "5px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"

    }
    return <div>
        <div style={onStyle} onClick={() => {
            setOn(true)
        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            setOn(false)
        }}>Off
        </div>
        <div style={indicatorStyle}></div>
        <UncontrollerAccordion/>
    </div>
}

export default OnOff