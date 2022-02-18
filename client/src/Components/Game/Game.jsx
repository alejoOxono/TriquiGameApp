import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePlayer } from '../../Actions/actionsCreators';
import './Game.scss'

function Game() {

    const dispatch = useDispatch();
    const player = useSelector((state) => state.playerBoolean);

    const [thereIsAWinner, setThereIsAWinner] = useState(false);
    const [thereIsATie, setThereIsATie] = useState(false);
    const [whoIsTheWinner, setWhoIsTheAWinner] = useState('');


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
    const [unoUno, setUnoUno] = useState([]);
    const [unoDos, setUnoDos] = useState([]);
    const [unoTres, setUnoTres] = useState([]);
    //verticales
    const [dosUno, setDosUno] = useState([]);
    const [dosDos, setDosDos] = useState([]);
    const [dosTres, setDosTres] = useState([]);
    //diagonales
    const [tresUno, setTresUno] = useState([]);
    const [tresDos, setTresDos] = useState([]);


    const everyOptionToWin = [unoUno, unoDos, unoTres, dosUno, dosDos, dosTres, tresUno, tresDos]
    const everyOptionToTie = [flagUnoUno, flagUnoDos, flagUnoTres, flagDosUno, flagDosDos, flagDosTres,
        flagTresUno, flagTresDos, flagTresTres]

    const handleChange = (value) => {
        if (!thereIsAWinner) {

            switch (value) {
                case 1:
                    if (!flagUnoUno) {
                        if (!player) {
                            setValueFlagUnoUno('X');
                            unoUno.push('X');
                            dosUno.push('X');
                            tresUno.push('X');
                        }
                        else {
                            setValueFlagUnoUno('O')
                            unoUno.push('O');
                            dosUno.push('O');
                            tresUno.push('O');
                        }
                        setFlagUnoUno(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 2:
                    if (!flagUnoDos) {
                        if (!player) {
                            setValueFlagUnoDos('X');
                            unoUno.push('X');
                            dosDos.push('X');
                        } else {
                            setValueFlagUnoDos('O');
                            unoUno.push('O');
                            dosDos.push('O');
                        }
                        setFlagUnoDos(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 3:
                    if (!flagUnoTres) {
                        if (!player) {
                            setValueFlagUnoTres('X');
                            unoUno.push('X');
                            dosTres.push('X');
                            tresDos.push('X');
                        } else {
                            setValueFlagUnoTres('O');
                            unoUno.push('O');
                            dosTres.push('O');
                            tresDos.push('O');
                        }
                        setFlagUnoTres(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 4:
                    if (!flagDosUno) {
                        if (!player) {
                            setValueFlagDosUno('X');
                            unoDos.push('X');
                            dosUno.push('X');
                        } else {
                            setValueFlagDosUno('O');
                            unoDos.push('O');
                            dosUno.push('O');
                        }
                        setFlagDosUno(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 5:
                    if (!flagDosDos) {
                        if (!player) {
                            setValueFlagDosDos('X');
                            unoDos.push('X');
                            dosDos.push('X');
                            tresUno.push('X');
                            tresDos.push('X');
                        }
                        else {
                            setValueFlagDosDos('O');
                            unoDos.push('O');
                            dosDos.push('O');
                            tresUno.push('O');
                            tresDos.push('O');
                        }
                        setFlagDosDos(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 6:
                    if (!flagDosTres) {
                        if (!player) {
                            setValueFlagDosTres('X');
                            unoDos.push('X');
                            dosTres.push('X');
                        }
                        else {
                            setValueFlagDosTres('O');
                            unoDos.push('O');
                            dosTres.push('O');
                        }
                        setFlagDosTres(true)
                        dispatch(changePlayer(!player))
                    }
                    break;
                case 7:
                    if (!flagTresUno) {
                        if (!player) {
                            setValueFlagTresUno('X');
                            unoTres.push('X');
                            dosUno.push('X');
                            tresDos.push('X');
                        }
                        else {
                            setValueFlagTresUno('O');
                            unoTres.push('O');
                            dosUno.push('O');
                            tresDos.push('O');
                        }
                        setFlagTresUno(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 8:
                    if (!flagTresDos) {
                        if (!player) {
                            setValueFlagTresDos('X');
                            unoTres.push('X');
                            dosDos.push('X');
                        }
                        else {
                            setValueFlagTresDos('O');
                            unoTres.push('O');
                            dosDos.push('O');
                        }
                        setFlagTresDos(true);
                        dispatch(changePlayer(!player));
                    }
                    break;
                case 9:
                    if (!flagTresTres) {
                        if (!player) {
                            setValueFlagTresTres('X');
                            unoTres.push('X');
                            dosTres.push('X');
                            tresUno.push('X');
                        }
                        else {
                            setValueFlagTresTres('O');
                            unoTres.push('O');
                            dosTres.push('O');
                            tresUno.push('O');
                        }
                        setFlagTresTres(true)
                        dispatch(changePlayer(!player))
                    }
                    break;
                default:
                    break;
            }
            whenIsWin();
            whenIsTie();
        }
    }

    const whenIsWin = () => {
        for (let n = 0; n < everyOptionToWin.length; n++) {
            if ((everyOptionToWin[n].filter((el) => el === 'X').length === 3)) {
                setThereIsAWinner(true);
                setWhoIsTheAWinner('jugador uno');
            }
            if ((everyOptionToWin[n].filter((el) => el === 'O').length === 3)) {
                setThereIsAWinner(true)
                setWhoIsTheAWinner('jugador dos');
            }
        }
    }

    const whenIsTie = () => {
        if ((everyOptionToTie.filter((el) => el === true).length === 8)) setThereIsATie(true)
    }

    return (
        <div className="content-all-game">
            {
                thereIsAWinner ?
                    <p>{`${whoIsTheWinner}`}</p>
                    :
                    <p></p>
            }
            {
                thereIsATie && !thereIsAWinner ?
                    <p>Hay empate</p>
                    :
                    <p></p>
            }
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