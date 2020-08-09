//Solo el usuario administrador puede ver determinadas paginas.

function adminMiddleware(req, res, next){
    
    next();
}