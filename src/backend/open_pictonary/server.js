var express = require('express');
var http = require('http');
var mongoose = require('mongoose');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello world!"))

app.listen(port, () => console.log("Example listening"));
