const express = require('express');
const engine = require('ejs-mate');
const path = require('path');

//initializations
const app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(require('./routes'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(3000, () =>{
    console.log('Server in port 3000');
});
