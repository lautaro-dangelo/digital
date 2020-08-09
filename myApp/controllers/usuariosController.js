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

        for(let i =0; db.Usuario.length < i; i++){
            if (req.body.mail == db.Usuario[i].mail && bcrypt.compareSync(req.body.password, db.Usuario[i].password)) {
                res.redirect('/productos')
            }else{
                res.render('error')
            }
        }
    },
};




module.exports = usuariosController;