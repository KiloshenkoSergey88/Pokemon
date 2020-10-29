const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use("/", express.static("d:/JS/Pokemon"));

io.on('connection', function(socket) {
    console.log('A user connected');

    

     socket.on('clientEvent', function(data) {
        console.log(data);
        setTimeout(function() {
            socket.send(`Сейчас я приду и угадаю это (${data})`);
        }, 3000);
    });
 
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });

http.listen(5000,"192.168.1.100", () => {
    console.log("Server running...")
});