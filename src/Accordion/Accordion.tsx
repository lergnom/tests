import React from 'react'

type AccordionTypeProps = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export function Accordion({collapsed, titleValue, onChange}: AccordionTypeProps) {
    console.log("Accordion render")
    return (
        <>
            <AccordionTitle title={titleValue} onChange={onChange}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}