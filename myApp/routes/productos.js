var express = require('express');
var router = express.Router();

var productosController = require('../controllers/productosController');


//Creacion de producto
router.get('/crear', productosController.crear);
router.post('/crear', productosController.guardado);

//Lectura de productos
router.get('/', productosController.listado);

//Detalle 
router.get('/:id', productosController.detalle);

//Actualizar
router.get('/editar/:id', productosController.editar);
router.post('/editar/:id', productosController.actualizar);

//Borrar
router.post('/borrar/:id', productosController.borrar)



module.exports = router;
