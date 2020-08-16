var express = require('express');
var router = express.Router();

let db = require('../database/models')
let { check, validationResult, body } = require('express-validator');

let guestMiddleware = require('../middlewares/guestMiddleware');

const usuariosController = require('../controllers/usuariosController');
const { func } = require('prop-types');

//Muestra el formulario de registro
router.get('/', guestMiddleware, usuariosController.registro);

//Creacion de ususario y validaciones con express-validator.
router.post('/', [
check('nombre').isLength({min:4}).withMessage('El nombre debe tener al menos 4 caracteres.'),
check('email').isEmail().withMessage('El mail no es válido.'),
check('password').isLength({min:7}).withMessage('La contraseña debe tener al menos 7 caracteres.'),
body('email').custom( function(){
    for(let i = 0; i < db.Usuario.length; i++){
        if(db.Usuario[i].email == value){
            return false ;
        }
    }
    return true;
}).withMessage('Ya existe un usuario con este mail.')
],usuariosController.creado);

//Muestra el formulario de login
router.get('/login', usuariosController.login)

//Procesa el login
router.post('/login',[
    check('email').isEmail().withMessage('Email invalido.'),
    check('password').isLength({min:8}).withMessage('La contraseña debe tener 8 caracteres.')
], usuariosController.processLogin)


router.get('/check', function(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        res.send('No estas logueado.')
    } else {
        res.send('El usuario logueado es '+ req.session.usuarioLogueado.email)
    }
})


module.exports = router;
