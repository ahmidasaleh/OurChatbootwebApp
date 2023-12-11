const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");

const app=express();
app.set("port",(process.env.PORT || 8000));
app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());

app.get("/",function(req,res){
    res.send("hey ,  i'm just fff مرحبا")
}

)
app.listen(app.get("port"),function(){
    console.log("server is running and  listen on port "+app.get("port"))
}
);
