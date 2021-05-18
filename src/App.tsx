import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import OnOff from "./OnOff/OnOff";
import {Rating} from './OnOff/Rating';
import {UncontrollerRating} from "./OnOff/UncontrollerRating";
import ContOnOff from "./OnOff/ContrOnOff";

function App() {
    let [on, setOn] = useState(true)

    return (
        <div>
            <ContOnOff on={on} setOn={(on) => {setOn(on)}}/>
            {/*<OnOff/>*/}
            <UncontrollerRating/>

        </div>


    )
}

export default App;
