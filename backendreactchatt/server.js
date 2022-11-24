//initialization of dependenci packages
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 5000;

//errorhandler import from middleware folder
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
