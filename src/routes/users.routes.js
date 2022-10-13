const express = require('express');
const router = express.Router();
const controllersUser = require('../controllers/user.controllers.js');
const {validId, validUser} = require('../middlewares/global.middlewares.js');

router.post('/', controllersUser.postUser);
router.get('/', controllersUser.findAll);
router.get('/:id', validId, validUser, controllersUser.findByid);
router.patch('/:id', validId, validUser, controllersUser.update);

module.exports = router