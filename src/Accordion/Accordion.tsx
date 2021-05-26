import React from 'react'

type ItemType = {
    title: string
    value: any
}

type AccordionTypeProps = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (item: any) => void

}

type AccordionTitleType = {
    title: string
    onChange: () => void
}

function AccordionTitle({title, onChange}: AccordionTitleType) {
    return (
        <div>
            <h3 onClick={(e) => onChange()}>{title}</h3>
        </div>
    )
}

type AccordionBodyType = {
    items: ItemType[]
    onClick: (item: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyType) {
    return (
        <ul>
            {items.map((item, index) => <li onClick={() => {
                onClick(item.value)
            }} key={index}> {item.title}</li>)}
        </ul>
    )
}

export function Accordion({collapsed, titleValue, onChange, items, onClick}: AccordionTypeProps) {
    console.log("Accordion render")
    return (
        <>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody items={items} onClick={onClick}/>}
        </>
    )
}