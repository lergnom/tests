import React, {useState} from "react";
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

    const selectedItem = items.find(i => i.value === value)
    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        onChange(value)
        toggleItems()
    }


    return (
        <div className={styles.select + ' ' + (active ? styles.active : '')}>
            <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            <div className={styles.items}>
                {items.map((i, index) => <div onClick={() => {
                    onItemClick(i.value)
                }} key={index}>  {i.title}</div>)}
            </div>
        </div>
    )
}
