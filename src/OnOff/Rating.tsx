import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </>
    )
}

type StarTypeProps = {
    selected: boolean
}

function Star(props: StarTypeProps) {
    return (
        <>
            <span>{props.selected ? <b>star </b> : 'star '}</span>
        </>
    )
}