var express = require('express');
var router = express.Router();

const multer = require('multer');
 let path = require('path');


var productosController = require('../controllers/productosController');


let storage = multer.diskStorage({

    destination: function(req, file, cb){
        cb(null, 'public/images')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage});

//Creacion de producto
router.get('/crear', productosController.crear);
router.post('/crear', upload.any(), productosController.guardado);

//Lectura de productos
router.get('/', productosController.listado);

//Detalle 
router.get('/:id', productosController.detalle);

//Actualizar
router.get('/editar/:id', productosController.editar);
router.post('/editar/:id', upload.any(), productosController.actualizar);

//Borrar
router.post('/borrar/:id', productosController.borrar)



module.exports = router;
