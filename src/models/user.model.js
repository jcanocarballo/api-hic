const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ape_pat:{
      type: String,
      required: true
    },
    ape_mat:{
      type: String,
      required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: {
      type: String,
      required: true
    },
    role:{
      type: String,
      default: 'usuario',
      enum:[
        'usuario',
        'administrador'
      ]      
    },
    sing_up_date:{
      type: Date,
      default: Date.now()
    },
    last_login_date:{
      type: Date,
      default: Date
    }
});

UserSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
}

UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

UserSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});

module.exports = mongoose.model('user', UserSchema);