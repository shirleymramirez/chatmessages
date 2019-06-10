var express = require("express");
var router = express.Router();
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});

router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
