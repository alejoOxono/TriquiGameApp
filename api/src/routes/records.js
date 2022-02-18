const { Router } = require("express");
const express = require("express");
const bulkRecordsBD = require("../modules/bulkRecordsBD");
const searchRecords = require("../modules/searchRecords");

const router = Router();
router.use(express.json());


router.post('/api/records', async (req, res) => {
    try {
        let para = req.body;
        await bulkRecordsBD(para);
        res.json({ response: 'correcto' });
    }
    catch (err) {
        res.json(err);
    }
})

router.get('/api/records', async (req, res) => {
    try {
        let resultado = await searchRecords();
        res.json(resultado);
    }
    catch (err) {
        res.json(err);
    }
})

module.exports = router;