import React, {KeyboardEventHandler, useEffect, useState} from "react";
import styles from './Select.module.css';

type ItemsType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}


export function DimychSelect({items, value, onChange}: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendent = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    if (pretendent) {
                        onChange(pretendent.value)
                        return;
                    }
                }

            }
            if (!selectedItem) {
                onChange(items[0].value)

            }


        }
        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false)
        }

    }

    return (
        <div tabIndex={0} onKeyUp={onKeyUp} className={styles.select + ' ' + (active ? styles.active : '')}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            <div className={styles.items}>
                {items.map((i, index) => <div
                    onMouseEnter={() => {
                        setHoveredElementValue(i.value)
                    }}
                    className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')} onClick={() => {
                    onItemClick(i.value)
                }} key={index}>  {i.title}</div>)}
            </div>
        </div>
    )
}
