import React, {ChangeEvent, ChangeEventHandler, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';


export default {
    title: 'Input',
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as Meta;

const Template: Story = (args) => <input {...args} />;

export const uncontrolledInput = Template.bind({});
uncontrolledInput.args = {
    primary: true,
    label: 'Button',
};

export const controlledInputwithFixedValue = Template.bind({});
controlledInputwithFixedValue.args = {
    value: 'asdas'
}

export const TrackValueInput = () => {
    const [value, setValue] = useState("")
    return <> <input onChange={(e) => {
        setValue(e.currentTarget.value)
    }
    }/> - {value} </>
}

export const GetValueofUnControlledInputByButtonpress = () => {
    let [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    return (

        <>
            <input ref={inputRef} type="text"/>
            <button onClick={() => {
                const el = inputRef.current as HTMLInputElement
                setValue(el.value)
            }}>save
            </button>
            - actual value: {value}
        </>
    )

}

export const GetValueofControlledInputByButtonpress = () => {
    let [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    return (

        <>
            <input value={value} onChange={(e) => {
                setValue(e.currentTarget.value)
            }} type="text"/>
            <button onClick={() => {
                setValue(value)
            }}>save
            </button>
            - actual value: {value}
        </>
    )

}

export const ControlldeInput = () => {
    const [parentValue, setParentValue] = useState("")
    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }


    return <input value={parentValue} onChange={onchange}/>
}


export const ControlldeCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onchange}/>
}


export const ControlldeSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    const onchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onchange}>
        <option> none</option>
        <option value={"1"}>Apatity</option>
        <option value={"2"}>Kirovsk</option>
        <option value={"3"}>Murmansk</option>
    </select>
}


//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
