import React, { useState } from 'react'
import './Game.scss'

function Game() {

    const [gamer, setGamer] = useState('');

    const [flagUnoUno, setFlagUnoUno] = useState(false);
    const [flagUnoDos, setFlagUnoDos] = useState(false);
    const [flagUnoTres, setFlagUnoTres] = useState(false);
    const [flagDosUno, setFlagDosUno] = useState(false);
    const [flagDosDos, setFlagDosDos] = useState(false);
    const [flagDosTres, setFlagDosTres] = useState(false);
    const [flagTresUno, setFlagTresUno] = useState(false);
    const [flagTresDos, setFlagTresDos] = useState(false);
    const [flagTresTres, setFlagTresTres] = useState(false);

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
    

    const handleUnoUno = () => {
        if (!flagUnoUno){
            setFlagUnoUno(true)
            setUnoUno([...unoUno, ...gamer])
        }
    }

    return (
        <div className="content-all-game">
            <div className="filas fila-uno-triqui">
                <div className="elementos elemento-uno-uno" onClick={handleUnoUno()}>

                </div>
                <div className="elementos elemento-uno-dos">

                </div>
                <div className="elementos elemento-uno-tres">

                </div>
            </div>
            <div className="filas fila-dos-triqui">
                <div className="elementos elemento-dos-uno">

                </div>
                <div className="elementos elemento-dos-dos">

                </div>
                <div className="elementos elemento-dos-tres">

                </div>
            </div>
            <div className="filas fila-tres-triqui">
                <div className="elementos elemento-tres-uno">

                </div>
                <div className="elementos elemento-tres-dos">

                </div>
                <div className="elementos elemento-tres-tres">

                </div>
            </div>
        </div>
    )
}

export default Game