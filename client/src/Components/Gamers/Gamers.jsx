import React, { useState } from 'react'
import './Gamers.scss'

function Gamers() {
    const [currentGamer, setCurrentGamer] = useState(false)

    return (
        <div className="content-all-gamers">
            <div className="jugadores-container">

                <div className="jugador-uno">
                    <p>Jugador Uno</p>
                </div>

                <div className="jugador-dos">
                    <p>Jugador Dos</p>
                </div>
            </div>

            <div className="jugador-actual">
                {
                    !currentGamer ?
                        <p>Jugador Uno</p>
                        :
                        <p>Jugador Dos</p>
                }
            </div>
        </div>
    )
}

export default Gamers