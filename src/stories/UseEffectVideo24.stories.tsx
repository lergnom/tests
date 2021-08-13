import React, {useEffect, useMemo, useState} from "react";

export default {
    title: 'useEffectVideo24'
}


export const KeYTrack = () => {
    const [text, setText] = useState('')
    console.log("Component render", text)

    useEffect(() => {
        console.log('Effect occurred')

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        //Сброс юз эффекта срабатывает или когда компонента умирает либо перед очередным вызовом юз эффекта
        return () => {
            console.log("Reset Effect")
            window.removeEventListener('keypress', handler)


        }

    }, [])

    return <>
        Typed text: {text}
    </>

}


export const SetTimeoutEx = () => {
    const [text, setText] = useState('')
    console.log("Component render", text)

    useEffect(() => {
        console.log('Effect occurred')

        const timeoutId = setTimeout(() => {
            setText('3 seconds later')
        }, 300)


        //Сброс юз эффекта срабатывает или когда компонента умирает либо перед очередным вызовом юз эффекта
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])

    return <>
        Typed text: {text}
    </>

}


export const useEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("Component render")

    useEffect(() => {
        console.log('Effect occurred')

        //Сброс юз эффекта срабатывает или когда компонента умирает либо перед очередным вызовом юз эффекта
        return () => {
            console.log("Reset Effect")
        }

    }, [counter])

    return <>
        Hello, {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

    </>

}
