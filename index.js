var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

var users = 0;
io.on('connection', function(socket){
  console.log(++users + " challengers online!");

  socket.emit('player', users);

  socket.on('disconnect', function(){
    users--;
  })

  socket.on('move made', function(move){
    socket.broadcast.emit('my turn', move);
  });
});

http.listen(3000, function(){
  console.log('ready for action on some-badass-host:3000');
});
