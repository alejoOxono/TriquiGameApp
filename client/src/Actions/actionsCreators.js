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

export const addRecord = (object) => {
    return function () {
        axios
            .post('http://127.0.0.1:3002/api/records', object)
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

export const getRecords = () => {
    return async function (dispatch) {
        axios
            .get('http://127.0.0.1:3002/api/records')
            .then((data) => {
                dispatch({
                    type: GET_RECORDS,
                    payload: data.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
