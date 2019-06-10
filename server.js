var express = require('express');
var app = express();
var http = require('http').createServer(app);
var hbs = require('express-handlebars');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'hbs');

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'home',
    // layoutsDir: __dirname + '/views/pages/',
    // partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', '.hbs');

app.use(express.static("public"));

var routes = require("./routes/index.js");

app.use("/", routes);

io.on('connection', function (socket) {
    console.log('a user connected');
});


io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});
