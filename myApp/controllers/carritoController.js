 let db = require('../database/models');



let carritoController = {

list: function(req, res){

    db.Carrito.findAll({
        where:{
            usuario_id: req.session.usuarioLogueado.id
    }
 })
 .then(
     function(productosCarrito){

         res.render('carrito', {productosCarrito: productosCarrito})
 })
     },

    agregar: function(req, res) {
        db.Carrito.create({
            producto_id: '',
            usuario_id: req.session.usuarioLogueado.id,
            cantidad:''
        })
    }
}



module.exports = carritoController;