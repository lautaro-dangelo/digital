var express = require('express');
var router = express.Router();

let authMiddleware = require('../middlewares/authMiddleware');

let carritoController = require('../controllers/carritoController');


router.get('/', carritoController.list);

router.post('/agregar', carritoController.agregar);

module.exports = router;
