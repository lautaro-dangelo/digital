//Solo el usuario administrador puede ver determinadas paginas.
let db = require('./database/models');

function adminMiddleware(req, res, next){

    if(req.session.usuarioLogueado == db.Usuario.email.admin ){
        next();
    }else{
        res.send('Esta página es solo para administradores.')
    }

};

module.exports = authMiddleware;