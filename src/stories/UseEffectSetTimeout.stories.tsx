import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffectSetTimeout demo'
}

export const SetTimeout = () => {
    console.log("componenta")


    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    // useEffect(() => {
    // console.log("useEffect every render")
    // document.title = counter.toString()
    // })

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = counter.toString()
        }, 1000)

    }, [counter])


    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={() => {
            setFake(fake + 1)
        }}>+
        </button>
    </>

}