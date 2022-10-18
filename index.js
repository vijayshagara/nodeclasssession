const express = require("express");
const employeeRouter = require("./Router/employeeRouter");
const app = express();
const mongo = require("./connect");
const dotenv = require("dotenv");

dotenv.config();
mongo.connect();


// to parse req.body
app.use(express.json());
// MiddleWare
app.use("/", (req, res, next) => {
  //Authentication
  var auth = {
    authorised: true,
  };
  if (auth.authorised) {
    //console.log("Authorised");
    next();
  } else {
    res.send({ msg: "Not Authorised" });
  }
});
app.use("/employees", employeeRouter);

app.listen(process.env.PORT);
