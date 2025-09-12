const express = require('express');
const router = express.Router();

const { getServerRunnig } = require('../controllers/serverRun');

router.get('/', getServerRunnig);

module.exports = router;