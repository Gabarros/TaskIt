const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    tasks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    loginType: String
});

module.exports = mongoose.model('User', UserSchema);