const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { ENGINE_METHOD_PKEY_ASN1_METHS } = require("constants");

const app = express();
let items = [];
app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
  let today = new Date() ;
  
 
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 let day = today.toLocaleDateString("en-US");
  
 res.render("list", {kindOfDay : day,newListItems:items});

});

app.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000, function(){ 
    console.log("the server is up and running on port 3000");
});