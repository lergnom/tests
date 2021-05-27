import React, {MouseEventHandler} from "react";
import s from './Select.module.css'

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
    onClickItem: (value: React.MouseEvent<HTMLDivElement>) => void
}


export function Select({items, value, onChange, collapsed, onClick, onClickItem}: SelectPropsType) {
    return (
        <div className={s.main}>
            <div onChange={onChange} onClick={onClick}>{value}</div>
            {!collapsed && items.map((i, index) => <div onClick={onClickItem} className={s.item}
                                                        key={index}> {i.title}</div>)}
        </div>
    )
}
