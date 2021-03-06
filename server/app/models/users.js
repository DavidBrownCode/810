var Mongoose = require('Mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    active: {type: Boolean, default: true},
    role: {type: String, Enumerator:['admin', 'user', 'staff']},
    dateRegistered: {type: Date, default: Date.now},
    email: {type: String, require: true, unique: true},
    password: {type:String, require: true}
});

