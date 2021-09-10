 const express = require("express");
 const dotenv = require("dotenv").config();
 const port = process.env.PORT;
 const db = require("./config/mongoose");
 const app = express();


 app.use(express.json());
 app.use("/", require("./routes"));


 //starting the server

 app.listen(port, () =>
     console.log('Server is running on port', port));