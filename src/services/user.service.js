const BaseService = require('./base.service');
const { ErrorHelper } = require('../helpers');

let _userRepository = null;

class UserService extends BaseService {
    constructor({ UserRepository }) {
        super(UserRepository);
        _userRepository = UserRepository;
    }

    async getUserByUsername(username) {
        return await _userRepository.getUserByUsername(username);
    }

    async uploadImage(id, files){
      if (!id) {
        ErrorHelper.error(400, "El id no ha sido enviado.");
      }
      if(!files.image){
        ErrorHelper.error(404, "No se ha subido ningun archivo.");        
      }
      let file_path = files.image.path;
      let file_split = file_path.split('\\');
      let file_name = file_split[2];
      let ext_split = file_name.split('\.');
      let file_ext = ext_split[1];

      if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
        return await this.update(id, {image: file_name})        
      }else{
        ErrorHelper.error(404, "Extencion no valida.");
      }
    }
}

module.exports = UserService;