// Import the 'express' module 
const express = require("express");

// Create an instance of the Express application 
const app = express();

// Define a route for the root path '/'
app.get("/",(req,res) => {
    res.setHeader("Content-Type","text/html");
    res.send(
        "<html><head><title>NodeJs Assignment</title></head><body><h1>Assignment 1 : To Do App</body></html>"
    );
});

// Define a route for homeController 
const homeController = require("./controllers/homeController.js")
app.get("/home", homeController);


// INCOMPLETE PARTS : START
// // Define a route for userController 
// const userController = require("./controllers/userController.js")
// app.get("/user/:username", userController => {
//     const username = req.params.username;
// });
// INCOMPLETE PARTS : END



// Start server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log("Server is listening on port ${port}");
});
