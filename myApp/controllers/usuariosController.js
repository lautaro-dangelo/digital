let db = require('../database/models');
let bcrypt = require('bcrypt');

let { check, validationResult, body } = require('express-validator');

let usuariosController = {

    //Crea un nuevo usuario en la db y valida el formulario.
    creado: async (req, res) => {

        let a = [ req.body.email, req.body.password ];
        let errors = validationResult(req);

        if(errors.isEmpty()){

        db.Usuario.create({
            nombre: req.body.nombre,
            email: a[0],
            password: await bcrypt.hash(a[1], 10),
        });
        res.redirect('/')} else{
            res.render('registro', {errors: errors.errors})
        }
    },
    registro: function(req, res){
        res.render('registro')
    },
    login: function(req, res) {
        res.render('login')
    },
    processLogin:function(req,res) {
        
        let errors = validationResult(req);

        if(errors.isEmpty()){

        let usuarioALoguearse;

        for(let i =0; i < db.Usuario.length; i++){
            if (db.Usuario[i].email == req.body.email) {
                if(bcrypt.compareSync(req.body.password, db.Usuario[i].password)){
                     usuarioALoguearse = db.Usuario[i];
                    break;
                }
            }
        }
        if(usuarioALoguearse == undefined){
            res.render('login', {errors: [
                {msg: 'Credencialees invalidas.'}
            ]});
        }
        console.log(req);
        req.session.usuarioLogueado = usuarioALoguearse;
        res.redirect('/productos');

        //Cookie que recuerda al usuario.
        if(req.body.recordame != undefined){
            res.cookie('recordame', 
            usuarioALoguearse.email, { maxAge: 6000000})
        }

        res.render('index')
    }else{
        res.render('login', {errors: errors});
    }
    },
};




module.exports = usuariosController;