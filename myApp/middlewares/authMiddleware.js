//Se encarga de chequear que el usuario este logueado.

function authMiddleware(req, res, next){

    if(req.session.usuarioLogueado != undefined){
        next();
    }else{
        res.render('authMiddleware')
    }

};

module.exports = authMiddleware;