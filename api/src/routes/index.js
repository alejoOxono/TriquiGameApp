const { Router } = require('express');
const recordsRoute = require('../routes/records')  

const router = Router();


router.get('/api/records', recordsRoute);
router.post('/api/records', recordsRoute);

module.exports = router;
