var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');


//Creacion de producto
router.get('/crear', productosController.crear)



module.exports = router;
