const   express = require("express"),
        app = express(),
        http = require('http').Server(app),
        io = require('socket.io')(http),
        dataChar = require('./Data/DataChar.json');

app.use("/", express.static("d:/JS/Pokemon"));
io.on('connection', function(socket) {
    console.log('A user connected');

    socket.send(dataChar);



    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
});

http.listen(5000,"192.168.1.100", () => {
    console.log("Server running...")
});