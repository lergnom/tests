import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('generateData')
    //return difficult counting
    return 234234
}

export const Example1 = () => {
    console.log("Example1")

    // const initValue = useMemo(generateData, [])
    // const [counter, setCounter] = useState(initValue)

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1
    return <>
        <button onClick={() => {
            // setCounter(counter + 1)
            // setCounter(changer)
            setCounter(state => state + 1)
        }}>+
        </button>
        {counter}
    </>

}