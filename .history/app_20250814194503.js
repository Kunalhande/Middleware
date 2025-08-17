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



 
// app.get("/random" ,(req,res) =>{
//    console.log("This is only for random");
// });

// Is used to log the information(utility middleware)
// app.use((req,res,next)=>{
//    req.time = new Date(Date.now()).toString();
//    console.log(req.method,req.hostname,req.path,req.time);
//    next();
// });

//for the Error of non exsting page(404 Error)
// app.use((req,res)=>{
//    res.send("Page not found");
// })

app.use("/api", (req,res,next)=>{
   let{token} = req.query;
   if(token === "giveaccess"){
      next();
   }
   res.send("ACCESS DENIED");
})

app.get("/api",(req,res)=>{
   res.send("data")
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