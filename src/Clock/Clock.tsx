import React, {useEffect, useState} from "react";
import s from './Clock.module.css'

class CanvasComponent extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        // @ts-ignore
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0, 0, 100, 100);
    }

    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

type PropsType = {
    analogMode: boolean
}

function getTwoStringFormat(src: number) {
    let result = src.toString()
    return result.length === 1 ? '0' + result : result
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const myDate = setInterval(() => {
            console.log('tik-tak')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(myDate)
        }

    }, [])


    return <>
        {!props.analogMode && <div className={s.digitalMode}>
            <span>{getTwoStringFormat(date.getHours())}</span>
            :
            <span>{getTwoStringFormat(date.getMinutes())}</span>
            :
            <span>{getTwoStringFormat(date.getSeconds())} </span>
        </div>}
        {props.analogMode && <CanvasComponent/>}
    </>


}