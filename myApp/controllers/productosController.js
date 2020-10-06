let db = require('../database/models');

let productosController = {
    crear: function(req, res, next){
        db.Producto.findAll()
        .then(function(productos){
            return res.render('creacionProductos', {productos: productos})
        })
    },
    guardado: function(req, res) {
      
        db.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            precio: req.body.precio
        })
        .then( () =>{
        res.redirect('/productos')
        })
    },
    listado: function(req, res) {
        db.Producto.findAll()
        .then(function(productos){
            res.render('listadoProductos', {productos: productos})
        })
    },
    detalle: function(req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function(producto){
            res.render('detalleProducto', {producto: producto})
        })
    },
    editar: function(req, res){
     db.Producto.findByPk(req.params.id)
        .then(function(producto){
            res.render('editarProducto', {producto: producto})
        })
    },
    actualizar:function(req, res){
        db.Producto.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            precio: req.body.precio
        }, {
            where:{
                id: req.params.id
            }
        })
        .then( () =>{
            res.redirect('/productos/'+req.params.id)
        })
    },
    borrar: function(req, res){
        db.Producto.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/productos')
    }
};





module.exports = productosController;