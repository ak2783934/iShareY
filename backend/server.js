require("dotenv").config();
const bodyParser = require("body-parser");

//import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");

//port
const PORT = process.env.PORT || 8080;

//*mongooose connection
mongoose.connect(process.env.CODE_PATH || "mongodb://localhost:27017/iShareY", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("error", function (err) {
  console.error("ERORR: " + err);
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!"); //just for checking if the routes are connected or not bro!
});

//cors for cross transfer of urls. only after just adding this, things start working like fooo!
// app.use(cors());

//similarly we are not getting any body parsed into the request, so we just pass the data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//HTTP logger is used here
app.use(morgan("tiny"));

//checking where the application is running

//*routes
const authRoutes = require("./routes/auth");
const msgRoutes = require("./routes/msg");
const taskRoutes = require("./routes/task");
const workRoutes = require("./routes/work");
app.use("/api", authRoutes);
app.use("/api", msgRoutes);
app.use("/api", taskRoutes);
app.use("/api", workRoutes);

//hosting use

app.use(express.static("public"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("../client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });
// }

//listening here
app.listen(PORT, console.log(`Server is starting at port ${PORT}`));
