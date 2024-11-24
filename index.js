const express = require('express')
const app = express();
const port = 5000;

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.get("/data", (req, res)=>{
    res.send("Coming Soon")
})

app.listen(port, ()=>{
    console.log(`Running ${port}`);
})