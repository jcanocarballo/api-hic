const { JwtHelper, ErrorHelper } = require('../helpers');
let _userService = null;

class AuthService {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async signUp(user) {
        const { username } = user;
        const userExist = await _userService.getUserByUsername(username)

        if (userExist) {
          ErrorHelper.error(400, "El usuario ya existe");
        }
        return await _userService.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const userExist = await _userService.getUserByUsername(username)

        if (!userExist) {
          ErrorHelper.error(404, "Credenciales invalidas");
        }
        const validPassword = userExist.comparePasswords(password);
        if (!validPassword) {
          ErrorHelper.error(404, "Credenciales invalidas");
        }
        const userToEncode = {
            username: userExist.username,
            name: userExist.name,
            ape_pat: userExist.ape_pat,
            ape_mat: userExist.ape_mat,
            telefono: userExist.telefono,
            role: userExist.role,
            id: userExist._id,
        };
        const token = JwtHelper.generateToken(userToEncode);
        return { token, user: userExist };
    }
}

module.exports = AuthService;