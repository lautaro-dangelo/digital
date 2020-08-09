var express = require('express');
var router = express.Router();

const productosApiController = require('../../controllers/api/productosApiController');

router.get('/', productosApiController.listado);

router.get('/:id', productosApiController.find);

router.post('/', productosApiController.crear);






module.exports = router;