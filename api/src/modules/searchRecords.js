const { conn } = require("../db");
const { Record } = conn.models;

const searchRecords = async () => {

    let control = await Record.findAll();
    return control;

}

module.exports = searchRecords;