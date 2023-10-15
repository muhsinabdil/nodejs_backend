
const express = require("express");
const aktorlerRouter=require("./routers/aktorlerRouter");
const loggert =require("./middlewares/logger");
const host = '127.0.0.1'
const port = 3333;




const server = express();
server.use(express.json());//! 
server.use(loggert);  //! routerdan önce olsunki onlarada uygulansın
server.use("/aktorler", aktorlerRouter);

server.get("/", function (req, res) {

    res.send('Merhaba Router');

});


server.listen(port, host, function () {

    console.log(`http://${host}:${port} adresi dinleniyor`);

});

