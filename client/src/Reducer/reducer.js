import { CHANGE_PLAYER, CURRENT_PLAYER_ONE, CURRENT_PLAYER_TWO } from "../Actions/constants";


const stateInitial = {
    playerBoolean: false,
    playerOne: 'Player One',
    playerTwo: 'Player Two',
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

        default:
            return state;
    }
}

export default reducer;