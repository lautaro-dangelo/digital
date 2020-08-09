var express = require('express');
var router = express.Router();

const usuariosApiController = require('../../controllers/api/usuariosApiController');

router.get('/', usuariosApiController.listado);

router.get('/:id', usuariosApiController.find);



module.exports = router;