const express = require('express');

const app = express();

const groceryRoutes = require('./routes/grocery');

app.use('/groceries', groceryRoutes);

app.listen(3000,()=>{
    console.log('listening on posrt 3000');
})