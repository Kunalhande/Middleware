const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// Middleware to check token
const checkToken = (req, res, next) => {
   let { token } = req.query;
   if (token === "giveaccess") {
      return next();
   }
   throw new ExpressError(401, "ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
   res.send("data");
});

app.get("/", (req, res) => {
   res.send("history, i am root");
});

app.get("/random", (req, res) => {
   res.send("This is a random page");
});

app.get("/err", (req, res) => {
   abcd = abcd; // intentional error
});

// 404 handler
app.use((req, res) => {
   res.status(404).send("Page not found");
});

// Global error handler
app.use((err, req, res, next) => {
   let { status = 500, message = "Something went wrong" } = err;
   res.status(status).send(message);
});

app.listen(8080, () => {
   console.log("server is listening on port 8080");
});
