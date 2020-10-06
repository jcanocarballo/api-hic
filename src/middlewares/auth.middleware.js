const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { ErrorHelper } = require('../helpers')

module.exports = function(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
      ErrorHelper.error(403, "No tienes los permisos para acceder al recurso.");
    }
    jwt.verify(token, JWT_SECRET, function(err, decodedToken) {
        if (err) {
          ErrorHelper.error(403, "El token de authenticacion no es valido.");            
        }
        if(req.method != 'GET'){
          if(decodedToken.user.role == 'administrador'){
            req.user = decodedToken.user;
            next(); 
          }else{
            ErrorHelper.error(403, "No tienes los permisos para acceder al recurso.");
          }
        }else{
          req.user = decodedToken.user;
          next(); 
        }        
    });
}