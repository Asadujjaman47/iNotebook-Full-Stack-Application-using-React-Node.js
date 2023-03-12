
const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    pasword: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('user', UserSchema);


/*
// V7:
import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
        title:  String, // String is shorthand for {type: String}
        author: String,
        body:   String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
      meta: {
          votes: Number,
          favs:  Number
      }
    });
const Blog = mongoose.model('Blog', blogSchema);
    */