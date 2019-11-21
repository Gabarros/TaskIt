const express = require('express');
const routes = require('./routes');
const db = require('./config/db');

const app = express();


app.use(express.json());
app.use(routes);


app.get('/', (req, res)=>{

    res.status(200);
    res.send('Hello world');

})
app.listen(3000, ()=>{
    console.log('SERVER RUNNING');
});