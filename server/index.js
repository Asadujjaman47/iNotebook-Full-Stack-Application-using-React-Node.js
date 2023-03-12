const connectToMongo = require('./db');

const express = require('express');
const mongoose = require('mongoose');


connectToMongo();

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hi");
})

app.listen(port, ()=> {
    console.log(`App listening at ${port} port`);
})