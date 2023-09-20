
const express = require("express");
const server = express();

const host = '127.0.0.1'
const port = 3333;


const aktorlerRouter=require("./routers/aktorlerRouter")

server.get("/", function (req, res) {

    res.send('Merhaba Router');

});

server.use("/aktorler", aktorlerRouter);

server.listen(port, host, function () {

    console.log(`http://${host} adresi dinleniyor`);

});

