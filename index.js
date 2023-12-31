const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");

const app=express();
const page_access_token= "EAAFhwOZB3uaMBO1NzlkGHOHsjZAIZCR9ZAzFMl5K9V6ZBZC44urAcGqzbdCs2M8bydGes5CsqU81FNBjSzhnC7D5ifiXY5mYpc7IIUj0iY1uzcrysZB5F9CzQQQzYER9AZBYAx0VPePau3oNM4g0l7PIBuhiLl2impivEfpAhLBLXHCZCCZB97ZBperwzNsfHUAZBqEC2y5hZBLSZAsGjyftgm";
app.set("port",(process.env.PORT || 8000));
app.use(bodyparser.urlencoded({ extended:false}));
app.use(bodyparser.json());




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
    { res.status(403)}
});

app.get("/setup",function(req,res){
    setupegreetingtext();
    setupgetstartedbutton(); 
    setuppersistent_menu();
res.send("Done");
});

function setupgetstartedbutton()
{
    var data={
        "get_started": {"payload": "postback_payload"}
    };
    
    request(
        {
    
            url:"https://graph.facebook.com/v18.0/me/messenger_profile?access_token="+page_access_token,
            method:"POST",
            headers:{"Content-Type":"application/json"},
            form:data
        },
        function(error,response,body){
            console.log(response);
            console.log(body);
        }
    );
     
}

function setuppersistent_menu()
{
    var data={
        
         "persistent_menu": [
                {
                    "locale": "default",
                    "composer_input_disabled": false,
                    "call_to_actions": [
                        {
                            "type": "postback",
                            "title": "Talk to an agent",
                            "payload": "CARE_HELP"
                        },
                        {
                            "type": "postback",
                            "title": "Outfit suggestions",
                            "payload": "CURATION"
                        },
                        {
                            "type": "web_url",
                            "title": "Shop now",
                            "url": "https://www.facebook.com/Renadshop",
                            "webview_height_ratio": "full"
                        }
                    ]
                }
            ]
        
    };
    
    request(
        {
    
            url:"https://graph.facebook.com/v18.0/me/messenger_profile?access_token="+page_access_token,
            method:"POST",
            headers:{"Content-Type":"application/json"},
            form:data
        },
        function(error,response,body){
            console.log(response);
            console.log(body);
        }
    );
     
}


function setupegreetingtext(){
    var data={
        "greeting":[
            {
              "locale":"default",
              "text":"مرحبا بكم في BOOTCHAT!"
            }
          ]
    };
    
    request(
        {
    
            url:"https://graph.facebook.com/v18.0/me/messenger_profile?access_token="+page_access_token,
            method:"POST",
            headers:{"Content-Type":"application/json"},
            form:data
        },
        function(error,response,body){
            console.log(response);
            console.log(body);
        }
    );
    
}
app.listen(app.get("port"),function(){
    console.log("server is running and  listen on port "+app.get("port"));
}
);
