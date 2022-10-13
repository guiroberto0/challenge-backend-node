const express = require('express');
const router = express.Router();
const controlQuery = require('../controllers/articles.controllers.js');

router.get('/', controlQuery.getQuery);
router.post('/add', controlQuery.postArticles)

module.exports = router