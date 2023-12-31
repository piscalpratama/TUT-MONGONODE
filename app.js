const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
const mongoose = require("mongoose");

//configure mongoose
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb://0.0.0.0:27017/?directConnection=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
 
//middleware
app.use(express.json())
app.use("/api/blogs", blogRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;