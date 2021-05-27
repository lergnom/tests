import React from "react";

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    onClick: () => void
    items: ItemsType[]
    collapsed: boolean
}


export function Select({items, value, onChange, collapsed, onClick}: SelectPropsType) {
    return (
        <>
            <div onChange={onChange} onClick={onClick}>{value}</div>
            {!collapsed && items.map((i, index) => <div key={index}> {i.title}</div>)}
        </>
    )
}
