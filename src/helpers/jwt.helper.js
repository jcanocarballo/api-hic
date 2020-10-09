const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

module.exports.generateToken = function(user, expiresIn) {
    return sign({ user }, JWT_SECRET, { expiresIn: expiresIn });
}