const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require("./routes/user");
const leaveRoutes=require("./routes/leave");






const app = express();
mongoose.connect('mongodb://localhost:27017/emp16',
{ keepAlive: true,
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
});

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected");

})
mongoose.connection.on("error",(err)=>{
    console.log("mongodb not connected:"+JSON.stringify(err));

})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use("/api/user", userRoutes);
app.use("/api/leave", leaveRoutes);



const PORT = 3000;
 app.listen(3000,()=>{
console.log("server started port:"+PORT);
 })

module.exports = app;