 const express = require("express");
 const app = express();

//  app.use((req,res,next) =>{
//     console.log("hi, i am 1st middleware");
//     next();
//  });

//   app.use((req,res,next) =>{
//     console.log("hi, i am  2nd middleware");
//     next();
//  });


app.use((req,res,next)=>{
   console.log(req.method,req.hostname,req.path);
   next();
})

app.get("/", (req,res) =>{
    res.send("history, i am root");
});

app.get("/random", (req,res) =>{
    res.send("This is a random page");
})

 app.listen(8080,()=>{
    console.log("server is listening on port 8080");
 });