import { CHANGE_PLAYER, GET_RECORDS } from "./constants";


const axios = require('axios');

export const changePlayer = (value) => {
    return {
        type: CHANGE_PLAYER,
        payload: value
    }
}