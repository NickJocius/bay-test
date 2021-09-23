const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


require('dotenv').config();

// app
const app = express();

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host: 'localhost',
        user: 'local',
        password: 'deSi5nGO$',
        database: 'contacts',
        insecureAuth:true,
        debug:true,
	});
	res.locals.connection.connect();
	next();
});

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}))

//routes middleware
fs.readdirSync('./routes').map((r) => app.use("/api", require('./routes/' + r)));

// production serve static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})