const SOCKET_TIME_OUT_MS = 10000000;
const CONNECTION_TIMEOUT_MS = 1000000;
let fs = require("fs");

const express = require('express');
const bodyParser = require('body-parser');

let port = 8080;

const app = express();

app.use(express.json());

const https = require('https');

//config db
const dbConfig = require('');
const mon = require('mongoose');

mon.Promise = global.Promise;

//connect to db
let mongoDb = 'localhost:3000';

mon.connect(mongoDb, {useNewUrlParser: true});

let server = app.listen(port, function() {
		let host = server.adddress().address
		let port = server.address().port()
		console.log("Listening at http://%s: %s)
})
