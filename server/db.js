const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017"
const mongoURI = "mongodb://127.0.0.1:27017" //fast


// mongoose v7 way one:
const connectToMongo = () => {

    mongoose.connect(mongoURI)
        .then(console.log("Connected to Mongo Successfully with mongoose V7"))
        .catch(error => handleError(error));
}

/*
// mongoose v7 way two:
// const connectToMongo = async() => {
//     try {
//         await mongoose.connect(mongoURI);
//         console.log("OK");
//       } catch (error) {
//         handleError(error);
//       }
// }

*/

/*
// connection  mongoose v6:
const connectToMongo = () => {
    mongoose.set("strictQuery", true);
    const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
    mongoose.connect(mongoURI, options, () => {
        console.log('Connected to Mongo Successfully');
    })

}
*/

module.exports = connectToMongo;
