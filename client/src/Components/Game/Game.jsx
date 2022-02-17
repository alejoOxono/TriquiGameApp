import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePlayer } from '../../Actions/actionsCreators';
import './Game.scss'

function Game() {

    const dispatch = useDispatch();
    const player = useSelector((state) => state.playerBoolean);

    const [flagUnoUno, setFlagUnoUno] = useState(false);
    const [flagUnoDos, setFlagUnoDos] = useState(false);
    const [flagUnoTres, setFlagUnoTres] = useState(false);
    const [flagDosUno, setFlagDosUno] = useState(false);
    const [flagDosDos, setFlagDosDos] = useState(false);
    const [flagDosTres, setFlagDosTres] = useState(false);
    const [flagTresUno, setFlagTresUno] = useState(false);
    const [flagTresDos, setFlagTresDos] = useState(false);
    const [flagTresTres, setFlagTresTres] = useState(false);

    const [valueFlagUnoUno, setValueFlagUnoUno] = useState('');
    const [valueFlagUnoDos, setValueFlagUnoDos] = useState('');
    const [valueFlagUnoTres, setValueFlagUnoTres] = useState('');
    const [valueFlagDosUno, setValueFlagDosUno] = useState('');
    const [valueFlagDosDos, setValueFlagDosDos] = useState('');
    const [valueFlagDosTres, setValueFlagDosTres] = useState('');
    const [valueFlagTresUno, setValueFlagTresUno] = useState('');
    const [valueFlagTresDos, setValueFlagTresDos] = useState('');
    const [valueFlagTresTres, setValueFlagTresTres] = useState('');

    //horizontales
    const unoUno = [];
    const unoDos = [];
    const unoTres = [];
    //verticales
    const dosUno = [];
    const dosDos = [];
    const dosTres = [];
    //diagonales
    const tresUno = [];
    const tresDos = [];



    const handleChange = (value) => {
        switch (value) {
            case 1:
                if (!flagUnoUno) {
                    if (!player) {
                        setValueFlagUnoUno('X')
                        unoUno.push('X')
                    }
                    else {
                        setValueFlagUnoUno('O')
                        unoUno.push('O')
                    }
                    setFlagUnoUno(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 2:
                if (!flagUnoDos) {
                    if (!player) {
                        setValueFlagUnoDos('X')

                    } else {
                        setValueFlagUnoDos('O')
                        
                    }
                    setFlagUnoDos(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 3:
                if (!flagUnoTres) {
                    if (!player) {
                        setValueFlagUnoTres('X')
                    } else {
                        setValueFlagUnoTres('O')
                    }
                    setFlagUnoTres(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 4:
                if (!flagDosUno) {
                    if (!player) {
                        setValueFlagDosUno('X')
                    } else {
                        setValueFlagDosUno('O')
                    }
                    setFlagDosUno(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 5:
                if (!flagDosDos) {
                    if (!player) {
                        setValueFlagDosDos('X')
                    }
                    else {
                        setValueFlagDosDos('O')
                    }
                    setFlagDosDos(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 6:
                if (!flagDosTres) {
                    if (!player) {
                        setValueFlagDosTres('X')
                    }
                    else {
                        setValueFlagDosTres('O')
                    }
                    setFlagDosTres(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 7:
                if (!flagTresUno) {
                    if (!player) {
                        setValueFlagTresUno('X')
                    }
                    else {
                        setValueFlagTresUno('O')
                    }
                    setFlagTresUno(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 8:
                if (!flagTresDos) {
                    if (!player) {
                        setValueFlagTresDos('X')
                    }
                    else {
                        setValueFlagTresDos('O')
                    }
                    setFlagTresDos(true)
                    dispatch(changePlayer(!player))
                }
                break;
            case 9:
                if (!flagTresTres) {
                    if (!player) {
                        setValueFlagTresTres('X')
                    }
                    else {
                        setValueFlagTresTres('O')
                    }
                    setFlagTresTres(true)
                    dispatch(changePlayer(!player))
                }
                break;
        }
    }

    return (
        <div className="content-all-game">
            <div className="filas fila-uno-triqui">
                <div className="elementos elemento-uno-uno" onClick={() => handleChange(1)}>
                    {
                        flagUnoUno ?
                            <p>{`${valueFlagUnoUno}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-uno-dos" onClick={() => handleChange(2)}>
                    {
                        flagUnoDos ?
                            <p>{`${valueFlagUnoDos}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-uno-tres" onClick={() => handleChange(3)}>
                    {
                        flagUnoTres ?
                            <p>{`${valueFlagUnoTres}`}</p>
                            :
                            <p></p>
                    }
                </div>
            </div>
            <div className="filas fila-dos-triqui">
                <div className="elementos elemento-dos-uno" onClick={() => handleChange(4)}>
                    {
                        flagDosUno ?
                            <p>{`${valueFlagDosUno}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-dos-dos" onClick={() => handleChange(5)}>
                    {
                        flagDosDos ?
                            <p>{`${valueFlagDosDos}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-dos-tres" onClick={() => handleChange(6)}>
                    {
                        flagDosTres ?
                            <p>{`${valueFlagDosTres}`}</p>
                            :
                            <p></p>
                    }
                </div>
            </div>
            <div className="filas fila-tres-triqui">
                <div className="elementos elemento-tres-uno" onClick={() => handleChange(7)}>
                    {
                        flagTresUno ?
                            <p>{`${valueFlagTresUno}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-tres-dos" onClick={() => handleChange(8)}>
                    {
                        flagTresDos ?
                            <p>{`${valueFlagTresDos}`}</p>
                            :
                            <p></p>
                    }
                </div>
                <div className="elementos elemento-tres-tres" onClick={() => handleChange(9)}>
                    {
                        flagTresTres ?
                            <p>{`${valueFlagTresTres}`}</p>
                            :
                            <p></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Game