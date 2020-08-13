 let db = require('../database/models');


let carritoController = {
    list: function(req, res){
res.render('carrito')
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