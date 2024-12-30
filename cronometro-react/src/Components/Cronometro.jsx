import { useState, useEffect } from "react"
import "./styles.css"

const Chronometer = () => {
        const [time, setTime] = useState(0)
        const [isRunning, setisRunning] = useState(false)
    
        const startChronometer = () => {
            setisRunning(true)
        }
    
        const pauseChronometer = () => {
            setisRunning(false)
        }
    
        const restartChronometer = () => {
            setisRunning(false)
            setTime(0)
        }

    useEffect(() => {
        let interval = null
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        } else if (!isRunning && time !== 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isRunning, time])

    return (
        <div className="conteiner">
            <h1 className="title">Crónometro</h1>
            <h2>{String(Math.floor(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}</h2>
            <div>
                <button onClick={startChronometer} disabled={isRunning}>Iniciar</button>
                <button onClick={pauseChronometer} disabled={!isRunning}>Pausar</button>
                <button onClick={restartChronometer}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Chronometer 