const connectToMongo = require("./db");

const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();


// db connection
connectToMongo();

const app = express();
const port = 3001;

app.use(cors());

// for use req body, use this middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hi");
// })

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`App listening at ${port} port`);
});
