import React, {useState} from 'react'
import UncontrollerAccordion from "./UncontrollerAccordion";


type PropsType = {
    on: boolean
    setOn: (val: boolean) => void
}


function ContOnOff(props: PropsType) {


    const onStyle = {
        cursor: "pointer",
        padding: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        ...onStyle,
        marginLeft: "5px",
        backgroundColor: !props.on ? "red" : "white"
    }
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"

    }
    return <div>
        <div style={onStyle} onClick={() => {
            props.setOn(true)

        }}>On
        </div>
        <div style={offStyle} onClick={() => {
            props.setOn(false)

        }}>Off
        </div>
        <div style={indicatorStyle}></div>
        <UncontrollerAccordion/>
    </div>
}

export default ContOnOff