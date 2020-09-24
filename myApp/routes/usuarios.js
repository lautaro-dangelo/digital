let express = require('express');
let router = express.Router();
let db = require('../database/models')
const usuariosController = require('../controllers/usuariosController');

let { check, body } = require('express-validator');

let authMiddleware = require('../middlewares/authMiddleware');

let guestMiddleware = require('../middlewares/guestMiddleware');

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
router.get('/login', guestMiddleware, usuariosController.login);

//Procesa el login
router.post('/login',[
    check('email').isEmail().withMessage('Email invalido.'),
    check('password').isLength({min:3}).withMessage('La contraseña debe tener 8 caracteres.')
], usuariosController.processLogin);

//No hace nada mas que mostrar el mail del usuario logueado
router.get('/check', function(req, res, next){
    if(req.session.usuarioLogueado == undefined){
        res.send('No estas logueado.')
    } else {
        res.send('El usuario logueado es '+ req.session.usuarioLogueado.email)
    }
});

//Muestra el carrito.
router.get('/carrito', authMiddleware, usuariosController.carrito);

router.post('/carrito', authMiddleware, usuariosController.agregarCarrito);

router.post('/carrito/borrar', usuariosController.borrarDelCarrito);


module.exports = router;
