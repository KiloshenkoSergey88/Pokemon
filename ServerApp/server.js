const   express = require('express'),
        app = express(),
        http = require('http').Server(app),
        io = require('socket.io')(http),
        dataChar = require('./Data/DataChar.json'),
        bodyParser = require('body-parser'),
        pgp = require("pg-promise")(/*options*/);

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'usersdb',
    user: 'emercasa',
    password: '26081986Ktyf'
};
const db = pgp(cn);

app.use("/", express.static(__dirname + "/Reg"));
app.use("/game/:id", express.static("d:/JS/Pokemon"));

const urlPars = bodyParser.urlencoded({extended: false});
app.post("/reg", urlPars, function (req, res) {

    const query = 'SELECT * FROM users WHERE nickname = $1 LIMIT 1;';
    db.one(query, [req.body.regNick])
    .then(function (data) {
        console.log(data.nickname, req.body.regNick);
        if (data.nickname == req.body.regNick) {
            res.send('Login is found');
        } 
    })
    .catch(function () {
        db.one('INSERT INTO users(nickname, password, email, datereg) VALUES($1, $2, $3, $4) RETURNING nickname', [req.body.regNick, req.body.regPass, req.body.regEmail, new Date()])
        .then(function (data) {
            console.log(data);
            global.login = data.nickname;
            res.redirect(301, `../game/${login}`);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
    console.log(req.body);
    });
});


io.on('connection', function(socket) {
    console.log(`${global.login} is connected`, socket);

    socket.send(dataChar);

    socket.on('clientEventA', function(data) {
        for (let i = 0; i < dataChar.length; i++) {
            const el = dataChar[i].id;
            if (el == data) {
                
                socket.emit('serverEventA', {
                    char: dataChar[i]
                });
            }
            
        }
    });

    socket.on('clientEventB', function(data) {
        for (let i = 0; i < dataChar.length; i++) {
            const el = dataChar[i].id;
            if (el == data) {
                socket.emit('serverEventB', {
                    char: dataChar[i]    
                });
            }
            
        }
    });
    


    



    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
});

http.listen(5000,"192.168.1.100", () => {
    console.log("Server running...")
});