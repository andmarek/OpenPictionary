const http = require('http');
const WebSocketServer = require('websocket').server;


let nextVisitorNumber;

exports.onConnect = (socket) => {
    console.info(`Socket ${socket.id} has connected.`);
    onlineClients.add(socket.id);
    
    // Disconnect
    socket.on("disconnect", () => {
        onlineClients.delete(socket.id);
        console.info(`Socket ${socket.id} has disconnected.`);
    });

    // Guess
    socket.on("guess", (guess) => {
        console.info(`Socket ${socket.id} has guessed ${guess}.`);
        var msg = "incorrect";
        if (guess === 'TRUE') {
            msg = "correct"
            socket.boardcast.emit(`${socket.id} has correctly guess this round`)
        } 
        socket.emit(msg);
    });

    // Message
    socket.on("message", (message) => {
        socket.boardcast.emit(message);
    });

    // echoes on the terminal every "hello" message this socket sends
    socket.on("hello", helloMsg => console.info(`Socket ${socket.id} says: "${helloMsg}"`));

    // will send a message only to this socket (different than using `io.emit()`, which would broadcast it)
    socket.emit("welcome", `Welcome! You are visitor number ${nextVisitorNumber++}`);
}
