let db = require('../database/models');

const log = (req, res, next) =>{

res.locals.usuario = false;

if( req.session.usuarioLogueado ){

    res.locals.usuario = req.session.usuarioLogueado;

    next();

} else if( req.cookies.recordame ){

    db.Usuario.findOne({
        where:{
            email: req.cookies.recordame
        }
    })
    .then( (usuario) => {

        req.session.usuarioLogueado = usuario;

        res.locals.usuario = usuario;

        next();

    })

} else {
    next();
}

}

module.exports = log;