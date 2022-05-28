const express = require("express");
const app = express();
const port = 3001;


app.get('/health',(req,res)=>{
    res.send("Yep working");
})

app.get('/message',(req,res)=>{
    res.json({
        "name": "juno"
    });
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})