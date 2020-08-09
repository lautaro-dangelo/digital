//Recuerda al usuario logueado en toda la aplicaión.

function cookieAuthMiddleware(req, res, next) {
    if(res.cookie.recordame != undefined && 
        req.session.usuarioLogueado == undefined ){

            let usuarioALoguearse;

            for(let i =0; i < db.Usuario.length; i++){
                if (db.Usuario[i].mail == req.cookie.recordame) {
                    
                        usuarioALoguearse = db.Usuario[i];
                        break;
                }
            }
            req.session.usuarioLogueado = usuarioALoguearse;

    }
next();
}

module.exports = cookieAuthMiddleware;