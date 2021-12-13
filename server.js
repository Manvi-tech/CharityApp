const express = require("express");

const connectDB = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

//connecting mongoose
connectDB();
//body-parser

app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/Auth"));

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`server running on PORT ${port}`);
});
