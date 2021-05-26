import React from "react";

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}


export function Select({items, value, onChange}: SelectPropsType) {
    return (
        <>
            <div>{value}</div>
            {items.map((i, index) => <div key={index}> {i.title}</div>)}
        </>
    )
}
