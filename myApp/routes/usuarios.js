var express = require('express');
var router = express.Router();

let db = require('../database/models')
let { check, validationResult, body } = require('express-validator');

const usuariosController = require('../controllers/usuariosController');

//Muestra el formulario de registro
router.get('/', usuariosController.registro);

//Creacion de ususario y validaciones con express validator.
router.post('/', [
check('nombre').isLength({min:4}).withMessage('El nombre debe tener al menos 4 caracteres.'),
check('mail').isEmail().withMessage('El mail no es válido.'),
check('password').isLength({min:7}).withMessage('La contraseña debe tener al menos 7 caracteres.'),
body('mail').custom( function(){
    for(let i = 0; i < db.Usuario[i].mail; i++){
        if(db.Usuario[i].mail == value){
            return false ;
        }
    }
    return true;
}).withMessage('Ya existe un usuario con este mail.')
],usuariosController.creado);

//Muestra el formulario de login
router.get('/login', usuariosController.login)

//Procesa el login
router.post('/login', usuariosController.processLogin)

module.exports = router;
