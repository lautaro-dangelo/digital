let db = require('../database/models');
let bcrypt = require('bcrypt');

let { check, validationResult, body } = require('express-validator');

let usuariosController = {

    //Crea un nuevo usuario en la db y valida el formulario.
    creado: function(req, res) {

        let errors = validationResult(req);

        if(errors.isEmpty()){

        db.Usuario.create({
            nombre: req.body.nombre,
            mail: req.body.mail,
            password: bcrypt.hashSync(req.body.password),
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

        for(let i =0; i < db.Usuario.length; i++){
            if (db.Usuario[i].mail == req.body.mail) {
                if(bcrypt.compareSync(req.body.password, db.Usuario[i].password)){
                    let usuarioALoguearse = db.Usuario[i];
                    break;
                }
            }
        }
        if(usuarioALoguearse == undefined){
            res.render('login', {errors: [
                {msg: 'Credencialees invalidas.'}
            ]});
        }

        req.session.usuarioLogueado = usuarioALoguearse;
        res.render('index')
    }else{
        res.render('login', {errors: errors});
    }
    },
};




module.exports = usuariosController;