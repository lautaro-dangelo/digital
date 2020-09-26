var express = require('express');
var router = express.Router();

const productosApiController = require('../../controllers/api/productosApiController');
const adminMiddleware = require('../../middlewares/adminMiddleware');

router.get('/', adminMiddleware ,productosApiController.listado);

router.get('/:id', adminMiddleware, productosApiController.find);

router.post('/',adminMiddleware, productosApiController.crear);






module.exports = router;