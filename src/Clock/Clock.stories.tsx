import {Clock} from "./Clock";
import {useState} from "react";

export default {
    title: 'Clock',
    component: Clock
}

export const BaseExample = () => {
    const [analogMode, setAnalogMode] = useState(false)

    const setToggle = () => {
        setAnalogMode(!analogMode)
    }
    return <>
        <Clock analogMode={analogMode}/>
        <button onClick={setToggle}>{analogMode ? 'DigitalMode' : 'AnalogMode'}</button>
    </>

}

export const AnalogClockbyDimich = () => {
    return <Clock analogMode={true}/>
}