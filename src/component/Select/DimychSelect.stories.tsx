import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {DimychSelect} from "./DimychSelect";


export default {
    title: 'DimychSelect',
    component: DimychSelect
}


const callback = action("select action");

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return (
        <>
            <DimychSelect onChange={setValue} value={value} items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}/>
        </>
    )
}

export const WithOutValue = () => {
    const [value, setValue] = useState(null)

    return (
        <>
            <DimychSelect onChange={setValue} value={value} items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"}
            ]}/>
        </>
    )
}


