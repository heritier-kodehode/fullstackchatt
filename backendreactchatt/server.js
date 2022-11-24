//initialization of dependenci packages
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

//errorhandler import
const { errorHandler } = require("./middleware/errorMiddleware");
//initializing express app
const app = express();

//accept body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route for users middleware
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log("Server started on " + port);
});
