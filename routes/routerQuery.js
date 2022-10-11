const express = require('express');
const router = express.Router();
const controlQuery = require('../controllers/controlQuery.js');

router.get('/', controlQuery.getQuery)

module.exports = router