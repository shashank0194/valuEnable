const express = require('express');
const cors = require("cors")

const app = express();

app.use(express.json());

const { signup, signin } = require("./controllers/user.controller")

// connecting to frontend
app.use(cors({origin: 'http://localhost:3000', credentials: true}));


app.post("/signup", signup);
app.post("/signin", signin);
module.exports = app