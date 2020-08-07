var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const { check, validationResult, body } = require('express-validator');

//Muestra el formulario de registro
router.get('/', usuariosController.registro);

//Creacion de ususario
router.post('/', usuariosController.creado)

//Muestra el formulario de login
router.get('/login', usuariosController.login)

module.exports = router;
