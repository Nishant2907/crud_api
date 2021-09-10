const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,"Erroe connecting to DB"));
db.once('open', () => console.log("Connected to DB"));

module.exports = db;