import { CHANGE_PLAYER } from "../Actions/constants";


const stateInitial = {
    playerBoolean: false,

}


const reducer = (state = stateInitial, { type, payload }) => {
    switch (type) {
        case CHANGE_PLAYER:
            let valueBoolean;
            if(payload) {
                valueBoolean = true
            }
            return{
                ...state,
                playerBoolean: valueBoolean
            }

        default:
            return state;
    }
}

export default reducer;