const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: { type: Date, default: Date.now },
    completed: Boolean,
    startTime: String
    
});

module.exports = mongoose.model('Task', TaskSchema);