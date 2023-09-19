
const express = require("express");
const server = express();

const host = '127.0.0.1'
const port = 3333;
const data = require('./data.js');


server.get("/", function (req, res) {

    res.send('Merhaba Dünya');

});


server.get("/aktorler", function (req, res) {

    res.status(200).json(data);

});

server.get("/aktorler/:id", function (req, res) {

  const {id} =req.params;
const aktor=data.find(x=>x.id===parseInt(id))

if(aktor){
  res.status(200).json(aktor);
}else{
    res.status(404).send("Aradığınız Sayfa Bulunamadı")
}
});

server.listen(port, host, function () {

    console.log(`http://${host} adresi dinleniyor`);

});