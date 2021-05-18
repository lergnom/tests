import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react';
import ContrOnOff from "./ContrOnOff";


export default {
    title: 'OnOff',
    component: ContrOnOff,
};

export const onUncontrollerTRUE = () => <ContrOnOff on={true} setOn={x => x}/>
export const onUncontrollerFALSE = () => <ContrOnOff on={false} setOn={x => x}/>

export const ModeChaning = () => {
    const [value, setValue] = useState<boolean>(true)
    return <ContrOnOff on={value} setOn={setValue}/>
}

