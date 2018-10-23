// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
const mongoose = require("mongoose");

module.exports = function(mongoose, type) {
const Login = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
});


 User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of theUser Model lifecycle
  // In this case, before aUser is created, we will automatically hash their password
 User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  
  return Login;
};

const Login = mongoose.model("Login", Login);