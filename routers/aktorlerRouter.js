const router =require("express").Router();

module.exports = router;

let data=require("../data.js");


router.get("/", function (req, res) {

    res.status(200).json(data);

});

router.get("/:id", function (req, res) {

  const {id} =req.params;
const aktor=data.find(x=>x.id===parseInt(id))

if(aktor){
  res.status(200).json(aktor);
}else{
    res.status(404).send("Aradığınız Sayfa Bulunamadı")
}
});


let next_id=4;

router.post("/",(req,res)=>{

let yeniAktor=req.body;
yeniAktor.id=next_id;
next_id++;
console.log("idimiz:",next_id);
data.push(yeniAktor);
res.status(201).json(yeniAktor);

});


