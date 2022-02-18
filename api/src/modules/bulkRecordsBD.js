const { conn } = require("../db");
const { Record } = conn.models;

const bulkRecordsBD = async (para) => {

    await Record.create({
        winner: para.winner,
        losser: para.losser
    })

}



module.exports = bulkRecordsBD;