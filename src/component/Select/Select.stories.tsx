import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
}


// const callback = action("Accordion mode change event fired");
// const callbackSome = action("Some item was click");
// export const SelectComponent = () => <Select value={'Mos'} onChange={callback} items={[{value: 1, title: 'Apatity'}, {
//     value: 2,
//     title: 'Pskov'
// }, {value: 3, title: "Spb"}]}/>


export const SelectChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<string>('none')
    return (
        <>
            <Select collapsed={collapsed} items={[{value: 1, title: 'Apatity'}, {
                value: 2,
                title: 'Pskov'
            }, {value: 3, title: "Spb"}]} value={value} onChange={() => {
            }} onClick={() => {
                setCollapsed(!collapsed)
            }} onClickItem={(e) => {
                if (e.currentTarget.textContent) {
                    setValue(e.currentTarget.textContent)
                }
                setCollapsed(!collapsed)
            }}/>
        </>


    )

}

