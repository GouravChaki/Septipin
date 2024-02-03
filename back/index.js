const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const routes=require('./Router/routes')
const account_routes=require('./Router/account_routes')
const profile_routes=require('./Router/profile_routes')
var bodyParser = require('body-parser')

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(express.json()); //convert all incoming requests to json
app.use(cors({ credentials: true })); //abiding by cors policy

app.use("/", routes, account_routes, profile_routes);

app.listen(port, () => {
  console.log("Server established at port ", port);
});
