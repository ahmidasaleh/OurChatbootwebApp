const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");

const app=express();
app.set("port",(process.env.PORT || 8000));
app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());

app.get("/",function(req,res){
    res.send("hey ,  i'm just fff dggsdfsfssfsfd")
});

app.get("/webhook",function(req,res){
    //let mode = req.query["hub.mode"];
    const PAGE_VERIFY_TOKEN="ahmidasaleh"
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];
    if (token=== PAGE_VERIFY_TOKEN)
    {
        res.status(200).send(challenge);    
    }
    else
    { res.status(403).}
});
app.listen(app.get("port"),function(){
    console.log("server is running and  listen on port "+app.get("port"))
}
);
