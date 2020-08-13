let db = require('../../database/models');

let usuariosApiController = {


    listado: function(req, res) {
        db.Usuario.findAll()
        .then(function(usuarios){

            for(let i = 0; i < usuarios.length; i++ ){
                usuarios[i].setDataValue('endpoint', '/api/usuarios/'+ usuarios[i].id)
            }

            let respuesta = {
                meta:{
                    total: usuarios.length,
                    url: '/api/usuarios'
                },
                data: usuarios
            };
            

            res.send(respuesta)
        })
    },

    find: function(req, res) {
        db.Usuario.findByPk(req.params.id)
        .then(function(usuario){
            res.json(usuario)
        })
    },
};

module.exports = usuariosApiController;