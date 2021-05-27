import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {MySelect} from "./MySelect";


export default {
    title: 'Select',
    component: MySelect
}


const callback = action("select action");

export const MySelectChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<string>('Minsk')
    return (
        <>
            <MySelect collapsed={collapsed} items={[{value: 1, title: 'Apatity'}, {
                value: 2,
                title: 'Pskov'
            }, {value: 3, title: "Spb"}, {value: 4, title: "Minsk"}]} value={value} onChange={() => {
            }} onClick={() => {
                setCollapsed(!collapsed)
            }} onClickItem={(e) => {
                if (e.currentTarget.textContent) {
                    setValue(e.currentTarget.textContent)
                }
                setCollapsed(!collapsed)
                callback()
            }}/>
        </>


    )

}

