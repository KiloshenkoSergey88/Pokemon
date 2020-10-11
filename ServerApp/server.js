const express = require("express");

const app = express();

app.use("/", express.static("d:/JS/Pokemon"));

app.listen(5000,"192.168.1.100", () => {
    console.log("Server is started")
});