var express = require('express');
var router = express.Router();

const usuariosApiController = require('../../controllers/api/usuariosApiController');
const adminMiddleware = require('../../middlewares/adminMiddleware');

router.get('/', adminMiddleware ,usuariosApiController.listado);

router.get('/:id', adminMiddleware ,usuariosApiController.find);



module.exports = router;