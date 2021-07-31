import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log("simple exemple")


    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log("useEffect every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("useEffect onlu first render(component DidMount)")
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log("useEffect fires render and counter change ")
        document.title = counter.toString()
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