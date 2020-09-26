//Solo el usuario administrador puede ver determinadas paginas.

function adminMiddleware(req, res, next){

    if( res.locals.usuario.admin ){
        next();
    }else{
        res.send('Esta página es solo para administradores.')
    }

};

module.exports = adminMiddleware;