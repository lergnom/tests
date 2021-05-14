import React from 'react';
import logo from './logo.svg';
import './App.css';
import OnOff from "./OnOff/OnOff";
import {Rating} from './OnOff/Rating';

function App() {
    return (
        <>
            <OnOff/>
            <Rating value={3}/>
        </>

    );
}

export default App;
