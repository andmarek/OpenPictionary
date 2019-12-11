const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors'); // Please don't remove this. It's a headache.  const WebSocket = require('ws');

/* Sessions allow the user to login correctly */
const session = require('express-session');
const cookieParser = require('cookie-parser');

const MongoStore = require('connect-mongo')(session);

const routes = require('./routes/user-router');

const apiPort = 8080;

const wss = new WebSocket.Server({ port: 3030 });

let mongo_uri = 'mongodb://andrew:password@coms-319-090.cs.iastate.edu:27017/open_pictionary'

wss.on('connection', function connection(ws) {
    /* Handles messages from the server
    These will generally be chat or otherwise */
    ws.on('message', function incoming(data) {
        console.log('message');
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                console.log(data);
                client.send(data);
            }
        });
    });
});

var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(cookieParser())

app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db})
    }));

app.use(express.json());

//mongoose.Promise = global.Promise;

mongoose.connect(mongo_uri,
    {useNewUrlParser: true, useUnifiedTopology: true}).catch( e => { console.error('Connection error', e.message)}).then(console.log("wtf"));


db.on('error', console.error.bind(console, "MongoDB connection error:" )); // investigate

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Foo bar stuff');
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

