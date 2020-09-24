let db = require('../database/models');
let bcrypt = require('bcrypt');

let { check, validationResult, body } = require('express-validator');
const Item = require('../database/models/Item');

let usuariosController = {

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

        db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then( usuario => {
            if( !usuario ){
                
                res.render('login', {errors: [
                    {msg: 'El usuario no existe.'}
                ]});
            } else {

                if (bcrypt.compareSync( req.body.password, usuario.password )){

                    req.session.usuarioLogueado = usuario;

                    if(req.body.recordame != undefined){
                        res.cookie('recordame', 
                        usuario.email, { maxAge: 6000000})
                    }
                    
                    res.redirect('/productos');
                } else {
                    res.render('login', {errors: [
                        {msg: 'Contraseña incorrecta.'}
                    ]});
                }

            }
        })

        

     
    }else{
        res.render('login', {errors: errors});
    }
    },

    carrito: function( req, res ){

        db.Item.findAll({
            where: {
                state:1,
                usuario_id: req.session.usuarioLogueado.id
            },
            include: ['productos']
        })
        .then( ( items ) =>{

            return res.render('carrito', {items});

        })
  
    },
    agregarCarrito: function( req, res ) {

      db.Producto.findByPk( req.body.id)
      .then( producto =>{

        db.Item.create({
            precioUnitario: producto.precio,
            state: 1,
            order_id: null,
            usuario_id: req.session.usuario.id,
            producto_id: producto.id,
        })
      })
      .then( (item) => {

          return res.send(item)

      })
    },
    borrarDelCarrito: function( req, res ) {

        db.Item.destroy({
            where:{
             id: req.body.itemId,
            }
        })

    },

};




module.exports = usuariosController;