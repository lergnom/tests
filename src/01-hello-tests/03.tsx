import React from "react";


type TitleType = {
    title: string
}

type StreetType = {
    street: TitleType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: StreetType
}

type PropsType = {
    title: string
    man: ManType

}
export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man} = props
    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}