// Import express
const express = require("express");
const app = express();

// ✅ Custom Error Class
// This helps us throw errors with a specific "status" and "message"
class ExpressError extends Error {
   constructor(status, message) {
      super(); // call parent Error constructor
      this.status = status;
      this.message = message;
   }
}

// ✅ Middleware to check token in query string
// Example: http://localhost:8080/api?token=giveaccess
const checkToken = (req, res, next) => {
   let { token } = req.query;

   // If token is valid → let the request continue
   if (token === "giveaccess") {
      return next();
   }

   // Otherwise → throw a custom error
   throw new ExpressError(401, "ACCESS DENIED");
};

// ✅ Routes

// Root route
app.get("/", (req, res) => {
   res.send("history, i am root");
});

// Random page route
app.get("/random", (req, res) => {
   res.send("This is a random page");
});

// API route protected with token check
// Must call like: /api?token=giveaccess
app.get("/api", checkToken, (req, res) => {
   res.send("data");
});

// Route to test error handling
app.get("/err", (req, res) => {
   // This will throw a ReferenceError (abcd is not defined)
   abcd = abcd;
});

// ✅ 404 handler (runs if no route matches above)
app.use((req, res) => {
   res.status(404).send("Page not found");
});

// ✅ Global Error Handler
// This will catch *any error* thrown in the app
app.use((err, req, res, next) => {
   // Default values if not provided
   let { status = 500, message = "Something went wrong" } = err;
   res.status(status).send(message);
});


// ✅ Start the server
app.listen(8080, () => {
   console.log("server is listening on port 8080");
});
