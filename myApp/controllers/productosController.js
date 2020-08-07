let db = require('../database/models');



let productosController = {
    crear: function(req, res){
        db.Producto.findAll()
        .then(function(productos){
            return res.render('listadoProductos')
        })
    }


};





module.exports = productosController;