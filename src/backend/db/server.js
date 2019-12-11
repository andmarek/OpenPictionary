const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const WebSocket = require('ws');
const cors = require('cors'); // Please don't remove this. It's a headache.  const WebSocket = require('ws');

/* Sessions allow the user to login correctly */
const session = require('express-session');
const cookieParser = require('cookie-parser');

const MongoStore = require('connect-mongo')(session);

const routes = require('./routes/user-router');

const apiPort = 8080;

const wss = new WebSocket.Server({ port: 3030 });

let mongo_uri = 'mongodb://andrew:password@coms-319-090.cs.iastate.edu:27017/open_pictionary'
let prev_data = [];
let current_word = "";

wss.on('connection', function connection(ws) {
    /* Handling previous messages */
    for(let i = 0; i < prev_data.length; i++) {
        ws.send(prev_data[i]);
    }
    /* Handle any messages */
    ws.on('message', function incoming(data) {
        console.log('message');
        prev_data.push(data);
        wss.clients.forEach(function each(client) {
            console.log(data);
            if (client !== ws && client.readyState === WebSocket.OPEN) {
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

app.use((req, res, next) => {
    if (req.cookies.user_sid && !res.session.user) {
        res.clearCookie('user_sid');
    }
    next();
})

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/home');
    } else {
        next();
    }
}

app.route('/register')
    .post((req, res) => {
        routes.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                req.session.user = user.dataValues;
                res.redirect('/profile');
            })
            .catch(error => {
                res.redirect('/register');
            });
    });

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

