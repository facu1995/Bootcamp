/* import methodOverride from "method-override";
import cors from "cors";
import express from "express";  */
const methodOverride = require("method-override");
const cors = require("cors");
const express = require("express");
//
const app = express();
const log = console.log;

let port = process.env.PORT || 3000;

let users = ["bart", "lisa", "homero", "marge"];

app.use(cors()); // permite conectar con servidores distintas
app.use(methodOverride());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/users", (req, res) => {
   res.send(users);
});

app.post("/user/create/", (req, res) => {
   users.push(req.body.nombre);
   res.send("usuario creado");
});

app.delete("/user/delete/:nombre", (req, res) => {
   users.filter(el => el != req.params.nombre)
   res.send("usuario borrado");
});
app.put("/user/modify/:nombre/:nombre2", (req, res) => {
   users = users.map(el => (req.params.nombre === el) ? req.params.nombre2 : el)
   res.send("usuario ha sido modificado");
})

app.listen(port, () => {
   log("start server");
});

/* const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const connectURL =
   'mongodb+srv://tomi:ESCALERA10@cluster0.2gfct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const opts = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}
mongoose.connect(connectURL, opts)
   .then(resp => console.log("entro"))
   .catch(err => console.log("rompio"))
/* const { Schema, Model } = mongoose;

mongoose
   .connect(connectURL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
   })
   .then((res) => console.log('res'))
   .catch((err) => console.log(err));
 */


/* mongoose.connection.on('connected', () => console.log('MongoDB conectado'))
mongoose.connection.on('error', () => console.log('Error al conectar con MongoDB')) */