import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
import socket from 'socket.io'
import game from '../open_pictonary/game/game.js'
const app = express();
let onlineClients = new Set()

const port = process.env.PORT || '3000'; 
app.listen(port);
const server = http.createServer(app);
var io = socket(server);
io.on("connection", () => game.onConnect());
server.listen(9898, () => console.info('Listening on port 9898'));
/**
* Connect to the database
*/
/*mongoose.connect('mongodb://localhost', function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

/**
* Middleware
*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Catch Errors
 */
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

/**
* Register the routes
*/

routes(app);

export default app;
