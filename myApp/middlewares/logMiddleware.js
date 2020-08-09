const fs = require('fs');

function logMiddleware(req, res, next){
    fs.writeFileSync('log.txt', 'Ingreso en la página '+ req.url);
    
    next();
}

module.exports = logMiddleware;