import React, {useRef, useState} from 'react';
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
