import { useState, useEffect } from 'react';

const Cronometro = () => {
    const [tiempo, setTiempo] = useState(0)
    const [enEjecucion, setEnEjecucion] = useState(false)

    const iniciarCronometro = () => {
        setEnEjecucion(true)
    }

    const pausarCronometro = () => {
        setEnEjecucion(false)
    }

    const reiniciarCronometro = () => {
        setEnEjecucion(false)
        setTiempo(0)
    }

    useEffect(() => {
        let intervalo = null
        if (enEjecucion) {
            intervalo = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo + 1)
            }, 1000)
        } else if (!enEjecucion && tiempo !== 0) {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo)
    }, [enEjecucion, tiempo])

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Cronómetro</h1>
            <h2>{String(Math.floor(tiempo / 60)).padStart(2, '0')}:{String(tiempo % 60).padStart(2, '0')}</h2>
            <div>
                <button onClick={iniciarCronometro} disabled={enEjecucion}>Iniciar</button>
                <button onClick={pausarCronometro} disabled={!enEjecucion}>Pausar</button>
                <button onClick={reiniciarCronometro}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Cronometro

