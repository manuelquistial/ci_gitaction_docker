const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    posts: [{
        title: {
            type: String,
        },
        published: {
            type: Boolean,
        },
        link:{
            type: String,
        },
        author: {
            type: Number,
        }
    }]
})

const Users = mongoose.model('Users', usersSchema);

module.exports = {
    Users
};