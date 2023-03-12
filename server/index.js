const connectToMongo = require('./db');

const express = require('express');
const mongoose = require('mongoose');

// db connection
connectToMongo();

const app = express();
const port = 3001;


// app.get('/', (req, res) => {
//     res.send("Hi");
// })

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, ()=> {
    console.log(`App listening at ${port} port`);
})