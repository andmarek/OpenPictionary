const http = require('http');
const WebSocketServer = require('websocket').server;
import gameUtil from '../open_pictonary/controllers/gameUtil.js'

var roomToUsers = new Map();
var roomToGame = new Map();

let nextVisitorNumber;

exports.onConnect = (socket) => {
    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);
    
    // Add client to a game
    socket.on('addToRoom', function(roomName) {
        socket.join(roomName);
        var list = roomToUsers.get(roomName) || [];
        list.append(socket.id);
        roomToUsers.set(roomName, list); 
        var gameForRoom = roomToGame.get(roomName);
        if(gameForRoom == null) {
            // TODO intialize game
            gameForRoom = gameUtil.generateTopic(gameForRoom);
            roomToGame.set(roomName, gameForRoom);       
        }
        socket.broadcast.to(roomName).emit(`${socket.id} has joined the game`);
    });
    
    // Remove client from a game
    socket.on('removeFromRoom', function(roomName) {
        socket.leave(roomName);
        var list = roomToUsers.get(roomName) || [];
        list.remove(socket.id);
        if(list.length === 0) {
            roomToGame.set(roomToGame, null);
            roomToGame.remove(roomToGame);
        }
        socket.broadcast.to(roomName).emit(`${socket.id} has left the game`);
    });

    // Disconnect
    socket.on("disconnect", () => {
        onlineClients.delete(socket.id);
        console.info(`Socket ${socket.id} has disconnected.`);
    });

    // Guess
    socket.on("guess", (guess, roomName) => {
        console.info(`Socket ${socket.id} has guessed ${guess}.`);
        var msg = "incorrect";
        var game = roomToGame.get(roomName);
        if (gameUtil.cmp(guess, game.topic)) {
            msg = "correct";
            socket.broadcast.to(roomName).emit(`${socket.id} has correctly guess this round`);
            gameUtil.generateTopic(game);
            roomToGame.set(roomName, game);
        } 
        socket.emit(msg);
    });

    // Message
    socket.on("message", (message, roomName) => {
        socket.broadcast.to(roomName).emit(message);
    });

    // echoes on the terminal every "hello" message this socket sends
    socket.on("hello", helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));

    // will send a message only to this socket (different than using `io.emit()`, which would broadcast it)
    socket.emit("welcome", `Welcome! You are visitor number ${nextVisitorNumber++}`);
}
