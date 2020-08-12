var express = require('express');
var router = express.Router();

let authMiddleware = require('../middlewares/authMiddleware');

let carritoController = require('../controllers/carritoController');


router.get('/', authMiddleware, carritoController.list);

module.exports = router;
