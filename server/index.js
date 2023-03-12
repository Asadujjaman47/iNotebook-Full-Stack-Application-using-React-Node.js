const connectToMongo = require('./db');

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

// db connection
connectToMongo();

const app = express();
dotenv.config();
const port = 3001;

// for use req body, use this middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hi");
// })

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, ()=> {
    console.log(`App listening at ${port} port`);
})