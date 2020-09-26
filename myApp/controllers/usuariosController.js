let db = require('../database/models');
let bcrypt = require('bcrypt');

let { validationResult } = require('express-validator');


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

    cerrar: function(req, res){

       let usuario= req.session.usuarioLogueado ;
       if(req.cookies.recordame != undefined){
        res.cookie('recordame', usuario.email, { maxAge: 0})};
        req.session.destroy();
        res.redirect("/")
     
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

      db.Producto.findByPk(req.body.productoId)
      .then( producto =>{
        db.Item.create({
            precio: producto.precio ,
            state: 1,
            order_id: null,
            usuario_id: req.session.usuarioLogueado.id,
            producto_id: producto.id,
            producto_imagen: producto.imagen,
            producto_nombre: producto.nombre
        })
      })
      .then( (item) => {

          return res.send(item)

      })
      .then( res  =>{
        res.redirect('/usuarios/carrito')
      })
    },
    borrarDelCarrito: function( req, res ) {
        db.Item.destroy({
            where:{
             id: req.body.itemId,
            },
            force: true,
        })
        .then( () =>{
            res.redirect('/usuarios/carrito')
        })

    },
    comprar: function ( req, res ){

        
        let total = 0;

        db.Item.findAll({
            where:{
                state: 1,
                usuario_id: req.session.usuarioLogueado.id,
            }
        })
        .then( items => {
            
            items.forEach( item => {

                total= total + item.precio;
                
            });
            db.Order.findOne({
                orders:['created_at', 'DESC']
            })
        })
        .then( order => {
            return db.Order.create({
                order_number: order ? order.order_number+1 : 100,
                total: total,
                usuario_id: req.session.usuarioLogueado.id,
            })
        })
        .then( order =>{
            db.Item.update({
                state:0,
                order_id: order.id
            }, {
            where:{
                usuario_id: req.session.usuarioLogueado.id,
                state: 1,
                }
            })
        })
        .then( () =>{
            res.render('comprado')
        })
    },

};




module.exports = usuariosController;