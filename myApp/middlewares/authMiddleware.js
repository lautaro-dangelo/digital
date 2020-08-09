//Se encarga de chequear que el usuario este logueado.

function authMiddleware(req, res, next){

    if(req.session.usuarioLogueado != undefined){
        next();
    }else{
        res.send('Esta página es solo para usuarios registrados.')
    }

};

module.exports = authMiddleware;