import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from './OnOff/Rating';
import {UncontrollerRating} from "./OnOff/UncontrollerRating";
import ContOnOff from "./OnOff/ContrOnOff";
import {Accordion} from "./Accordion/Accordion";

function App() {
    let [on, setOn] = useState(true)

    return (
        <div>
            {/*<ContOnOff on={on} setOn={(on) => {         setOn(on)          }}/>*/}
            {/*<OnOff/>*/}
            {/*<UncontrollerRating/>*/}
            {/*<Accordion titleValue={'a'} collapsed={true} onChange={}/>*/}
        </div>


    )
}

export default App;
