import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { currentPlayerOne, currentPlayerTwo } from '../../Actions/actionsCreators';
import './Gamers.scss'

function Gamers() {

    const player = useSelector((state) => state.playerBoolean);
    const playerOne = useSelector((state) => state.playerOne);
    const playerTwo = useSelector((state) => state.playerTwo);

    const [changeNamePlayerOne, setChangeNamePlayerOne] = useState(false);
    const [changeNamePlayerTwo, setChangeNamePlayerTwo] = useState(false);
    const [inputName, setInputName] = useState('');

    const dispatch = useDispatch();

    const handleChangeName = (e, value) => {
        e.preventDefault();
        switch (value) {
            case 1:
                setChangeNamePlayerOne(true);
                break;
            case 2:
                setChangeNamePlayerTwo(true);
                break;
            case 3:
                setChangeNamePlayerOne(false);
                break;
            case 4:
                setChangeNamePlayerTwo(false);
                break;
            default:
                break;
        }
    }

    const handleInput = (e) => {
        setInputName(e.target.value)
    }

    const handleSend = (e, value) => {
        e.preventDefault();
        switch (value) {
            case 1:
                dispatch(currentPlayerOne(inputName));
                setChangeNamePlayerOne(false);
                break;
            case 2:
                dispatch(currentPlayerTwo(inputName));
                setChangeNamePlayerTwo(false);
                break;
        }
    }

    return (
        <div className="content-all-gamers">
            <div className="jugadores-container">

                <div className="jugadores-title">
                    <p>JUGADORES</p>
                </div>

                <div className="jugadires-name">
                    <div className="jugador-uno">
                        {
                            !changeNamePlayerOne ?
                                <>
                                    <p>{playerOne}</p>
                                    <button type='button' onClick={(e) => handleChangeName(e, 1)}>Cambiar</button>
                                </>
                                :
                                <>
                                    <input type="text" placeholder='...Nuevo Nombre' onChange={(e) => handleInput(e)} />
                                    <button type='button' onClick={(e) => handleChangeName(e, 3)}>Cancelar</button>
                                    <button type='button' onClick={(e) => handleSend(e, 1)}>Cambiar</button>
                                </>
                        }
                    </div>

                    <div className="jugador-dos">
                        {
                            !changeNamePlayerTwo ?
                                <>
                                    <p>{playerTwo}</p>
                                    <button type='button' onClick={(e) => handleChangeName(e, 2)}>Cambiar</button>
                                </>
                                :
                                <>
                                    <input type="text" placeholder='...Nuevo Nombre' onChange={(e) => handleInput(e)} />
                                    <button type='button' onClick={(e) => handleChangeName(e, 4)}>Cancelar</button>
                                    <button type='button' onClick={(e) => handleSend(e, 2)}>Cambiar</button>
                                </>
                        }
                    </div>
                </div>
            </div>

            <div className="jugador-actual">
                <p>TURNO DE:</p>
                {
                    !player ?
                        <p>{playerOne}</p>
                        :
                        <p>{playerTwo}</p>
                }
            </div>
        </div>
    )
}

export default Gamers