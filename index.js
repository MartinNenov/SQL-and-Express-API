const express = require('express');

const bodyParser = require('body-parser')

const groceryRoutes = require('./routes/grocery');

const errorController = require('./controller/error');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Autherization');
    next();
})

app.use('/groceries', groceryRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(3000, () => {
    console.log('listening on port 3000');
})