
const express = require("express");
const server = express();
const loggert =require("./middlewares/logger");
const aktorlerRouter=require("./routers/aktorlerRouter")
const host = '127.0.0.1'
const port = 3333;





server.use(express.json);

server.use(loggert);
server.use("/aktorler", aktorlerRouter);

server.get("/", function (req, res) {

    res.send('Merhaba Router');

});


server.listen(port, host, function () {

    console.log(`http://${host}:${port} adresi dinleniyor`);

});

