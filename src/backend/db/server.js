const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const cors = require('cors'); // Please don't remove this. It's a headache.
const WebSocket = require('ws');

const routes = require('./routes/user-router');

const apiPort = 8080;

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());

app.use(express.json());

let mongo_uri = 'mongodb://andrew:password@coms-319-090.cs.iastate.edu:27017/open_pictionary'

mongoose.connect(mongo_uri,
{useNewUrlParser: true, useUnifiedTopology: true}).catch( e => { console.error('Connection error', e.message)});

var db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error:" )); // investigate

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Foo bar stuff');
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

