import { CHANGE_PLAYER, GET_RECORDS, CURRENT_PLAYER_ONE, CURRENT_PLAYER_TWO } from "../Actions/constants";


const stateInitial = {
    playerBoolean: false,
    playerOne: 'Player One',
    playerTwo: 'Player Two',
    copyData: []
}


const reducer = (state = stateInitial, { type, payload }) => {
    switch (type) {
        case CHANGE_PLAYER:
            let valueBoolean;
            if (payload) {
                valueBoolean = true
            }
            return {
                ...state,
                playerBoolean: valueBoolean
            }

        case CURRENT_PLAYER_ONE:
            return {
                ...state,
                playerOne: payload
            }

        case CURRENT_PLAYER_TWO:
            return {
                ...state,
                playerTwo: payload
            }

        case GET_RECORDS:
            return {
                ...state,
                copyData: payload
            }

        default:
            return state;
    }
}

export default reducer;