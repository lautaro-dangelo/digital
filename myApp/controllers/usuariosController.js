let db = require('../database/models');

let usuariosController = {
    creado: function(req, res) {
        db.Usuario.create({
            nombre: req.body.nombre,
            mail: req.body.mail,
            password: req.body.password,
        });
        res.redirect('/')
    },
    registro: function(req, res){
        res.render('registro')
    },
    login: function(req, res) {
        res.render('login')
    },
};





module.exports = usuariosController;