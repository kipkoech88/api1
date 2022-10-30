const express = require("express");
const bodyParser = require("body-parser"); 
const PORT = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json()); 

const sayHi = (req, res) => {
    res.json({
        
            "slackUsername":"Hosea kipkoech", 
            "backend":true, 
            "age":21, 
            "bio":"I am a Python Django Backend developer"
        
    });
  };
  
  app.get("/", sayHi);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port 5000.`);
});