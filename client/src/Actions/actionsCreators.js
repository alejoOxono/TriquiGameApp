import { CHANGE_PLAYER, GET_RECORDS, CURRENT_PLAYER_ONE, CURRENT_PLAYER_TWO } from "./constants";


const axios = require('axios');

export const changePlayer = (value) => {
    return {
        type: CHANGE_PLAYER,
        payload: value
    }
}

export const currentPlayerOne = (value) => {
    return {
        type: CURRENT_PLAYER_ONE,
        payload: value
    }
}

export const currentPlayerTwo = (value) => {
    return {
        type: CURRENT_PLAYER_TWO,
        payload: value
    }
}