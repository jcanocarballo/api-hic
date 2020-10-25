const fs = require("fs");
const path = require("path");
let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }

    async get(req, res) {
        const { userId } = req.params;
        const user = await _userService.get(userId);
        return res.send(user);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const users = await _userService.getAll(pageSize, pageNum);
        return res.send(users);
    }

    async update(req, res) {
        const { body } = req;
        const { userId } = req.params;
        const updateUser = await _userService.update(userId, body);

        return res.send(updateUser);
    }

    async delete(req, res) {
        const { userId } = req.params;
        const deleteUser = await _userService.delete(userId);
        return res.send(deleteUser);
    }

    async uploadImage(req, res){
      const { userId } = req.params;   
      const uploadImage = await _userService.uploadImage(userId, req.files);  
      return res.status(200).send(uploadImage);      
    }

    async getImageFile(req, res){
      let imageFile = req.params.imageFile;
      let pathFile = `./uploads/users/${imageFile}`

      fs.exists(pathFile, (exist) =>{
        if(!exist){
          return res.status(404).send({message: "La imagen no existe."});
        }
        return res.status(200).sendFile(path.resolve(pathFile));
      })
    }
}

module.exports = UserController;