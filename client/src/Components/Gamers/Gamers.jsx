import React from 'react'
import { useSelector } from 'react-redux'
import './Gamers.scss'

function Gamers() {

    const player = useSelector((state) => state.playerBoolean);

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
                <p>Jugador Actual</p>
                {
                    !player ?
                        <p>Jugador Uno</p>
                        :
                        <p>Jugador Dos</p>
                }
            </div>
        </div>
    )
}

export default Gamers