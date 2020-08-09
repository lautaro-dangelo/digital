
let db = require('../../database/models');

let productosApiController = {
   
    listado: function(req, res) {
        db.Producto.findAll()
        .then(function(productos){

            for(let i = 0; i < productos.length; i++) {
              productos[i].setDataValue('endpoint', '/api/productos'+ productos[i].id)
            }
            
            let respuesta = {
                meta: {
                    status: 200,
                    total: productos.length,
                    url: '/api/productos'
                },
                data: productos
            };

            res.json(respuesta)
        })
    },
    find: function(req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            res.json(producto)
        })
    },
    crear: function(req, res){
        db.Producto.findAll()
        .then(function(productos){
             res.json({
                status: 200
             })
        })
    }
};


module.exports = productosApiController;