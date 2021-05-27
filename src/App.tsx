import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from './OnOff/Rating';
import {UncontrollerRating} from "./OnOff/UncontrollerRating";
import ContOnOff from "./OnOff/ContrOnOff";
import {Accordion} from "./Accordion/Accordion";
import {Select} from "./component/Select/Select";

function App() {
    let [on, setOn] = useState(true)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<string>('none')

    return (

        <div>
            {/*<ContOnOff on={on} setOn={(on) => {         setOn(on)          }}/>*/}
            {/*<OnOff/>*/}
            {/*<UncontrollerRating/>*/}
            {/*<Accordion titleValue={'a'} collapsed={true} onChange={}/>*/}
            {/*<Select collapsed={collapsed} items={[{value: 1, title: 'Apatity'}, {*/}
            {/*    value: 2,*/}
            {/*    title: 'Pskov'*/}
            {/*}, {value: 3, title: "Spb"}]} value={value} onChange={() => {*/}
            {/*}} onClick={() => {*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}} onClickItem={(e) => {*/}
            {/*    // setValue(e.currentTar)*/}
            {/*    console.log(e.currentTarget.textContent)*/}
            {/*    setCollapsed(!collapsed)*/}
            {/*}}/>*/}
        </div>


    )
}

export default App;
