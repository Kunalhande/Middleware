 const express = require("express");
 const app = express();

 app.use((req,res) =>{
    console.log("hi, i am middleware");
    res.send("middleware finished")
 });

app.get("/", (req,res) =>{
    res.send("history, i am root");
});

app.get("/random", (req,res) =>{
    res.send("This is a random page");
})

 app.listen(8080,()=>{
    console.log("server is listening on port 8080");
 });