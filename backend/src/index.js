const express = require('express');
const app = express();
app.use(express.json());

const { signup, signin } = require("./controllers/user.controller")


app.post("/signup", signup);
app.post("/signin", signin);
module.exports = app