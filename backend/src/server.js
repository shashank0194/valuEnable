const connect = require("./configs/db");

const app = require("./index");

require("dotenv").config()

const PORT = process.env.PORT || 3745

app.listen(PORT, async() => {
    await connect();
    console.log('Server is running on port', PORT)
})


